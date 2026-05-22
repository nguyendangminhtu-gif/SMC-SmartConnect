const { Client } = require('ssh2');
const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
const config = require('./config.json');

const conn = new Client();
let sftpInstance = null;
let watcherInstance = null;

// Helper to determine if a local path is ignored
function isIgnored(localFilePath) {
  const relative = path.relative(__dirname, localFilePath);
  if (!relative) return true; // ignore root itself
  const parts = relative.split(path.sep);
  return parts.some(part => config.ignore.includes(part));
}

// Helper to check if connection is active
let isConnected = false;

function ensureRemoteDir(remoteDir, sftp) {
  return new Promise((resolve, reject) => {
    const parts = remoteDir.split('/');
    let currentPath = '';

    async function processNextPart(index) {
      if (index >= parts.length) {
        return resolve();
      }

      const part = parts[index];
      if (!part && index === 0) {
        currentPath = '/';
        return processNextPart(index + 1);
      }

      currentPath = path.posix.join(currentPath, part);

      sftp.stat(currentPath, (err, stats) => {
        if (err) {
          sftp.mkdir(currentPath, (mkdirErr) => {
            if (mkdirErr && mkdirErr.code !== 4) {
              return reject(mkdirErr);
            }
            processNextPart(index + 1);
          });
        } else {
          processNextPart(index + 1);
        }
      });
    }

    processNextPart(0);
  });
}

function startSync() {
  console.log(`\nConnecting to VPS ${config.host} via SSH...`);

  conn.on('ready', () => {
    console.log('SSH connection established. Starting SFTP subsystem...');
    
    conn.sftp((err, sftp) => {
      if (err) {
        console.error('SFTP initialization failed:', err);
        conn.end();
        return;
      }

      sftpInstance = sftp;
      isConnected = true;
      console.log('SFTP active. Initializing file watcher on local directory D:\\UAV...\n');

      watcherInstance = chokidar.watch(__dirname, {
        persistent: true,
        ignoreInitial: false,
        awaitWriteFinish: {
          stabilityThreshold: 500,
          pollInterval: 100
        }
      });

      watcherInstance.on('all', async (event, localPath) => {
        if (isIgnored(localPath)) return;

        const relativePath = path.relative(__dirname, localPath).replace(/\\/g, '/');
        const remotePath = path.posix.join(config.remotePath, relativePath);
        const timestamp = new Date().toLocaleTimeString();

        if (event === 'add' || event === 'change') {
          console.log(`[${timestamp}] [Syncing] File modified: ${relativePath}`);
          
          try {
            const remoteDir = path.posix.dirname(remotePath);
            await ensureRemoteDir(remoteDir, sftp);

            sftp.fastPut(localPath, remotePath, (putErr) => {
              if (putErr) {
                console.error(`[${timestamp}] [ERROR] Failed to upload ${relativePath}:`, putErr.message);
              } else {
                console.log(`[${timestamp}] [SUCCESS] Sync complete -> ${remotePath}`);
              }
            });
          } catch (dirErr) {
            console.error(`[${timestamp}] [ERROR] Failed to ensure remote directory structure:`, dirErr.message);
          }
        } 
        else if (event === 'unlink') {
          console.log(`[${timestamp}] [Syncing] File deleted locally: ${relativePath}`);
          sftp.unlink(remotePath, (unlinkErr) => {
            if (unlinkErr) {
              console.error(`[${timestamp}] [ERROR] Failed to delete remote file ${relativePath}:`, unlinkErr.message);
            } else {
              console.log(`[${timestamp}] [SUCCESS] Remote file deleted -> ${remotePath}`);
            }
          });
        }
        else if (event === 'addDir') {
          console.log(`[${timestamp}] [Syncing] Folder created locally: ${relativePath}`);
          try {
            await ensureRemoteDir(remotePath, sftp);
            console.log(`[${timestamp}] [SUCCESS] Remote folder created -> ${remotePath}`);
          } catch (dirErr) {
            console.error(`[${timestamp}] [ERROR] Failed to create remote folder:`, dirErr.message);
          }
        }
        else if (event === 'unlinkDir') {
          console.log(`[${timestamp}] [Syncing] Folder deleted locally: ${relativePath}`);
          sftp.rmdir(remotePath, (rmdirErr) => {
            if (rmdirErr) {
              console.error(`[${timestamp}] [ERROR] Failed to delete remote folder ${relativePath}:`, rmdirErr.message);
            } else {
              console.log(`[${timestamp}] [SUCCESS] Remote folder deleted -> ${remotePath}`);
            }
          });
        }
      });

      console.log('--- Real-time Sync Active! ---');
      console.log('Any edits made in D:\\UAV will immediately sync to the VPS.');
      console.log('Press Ctrl+C to stop syncing.\n');
    });
  }).on('error', (err) => {
    console.error('SSH connection error:', err.message);
    isConnected = false;
    reconnect();
  }).on('end', () => {
    console.log('SSH connection ended.');
    isConnected = false;
    reconnect();
  }).on('close', () => {
    console.log('SSH connection closed.');
    isConnected = false;
    reconnect();
  }).connect({
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    keepaliveInterval: 10000, // keep the connection open
    keepaliveCountMax: 3
  });
}

let reconnectTimeout = null;
function reconnect() {
  if (watcherInstance) {
    watcherInstance.close();
    watcherInstance = null;
  }
  if (reconnectTimeout) clearTimeout(reconnectTimeout);
  
  console.log('Attempting to reconnect in 5 seconds...');
  reconnectTimeout = setTimeout(() => {
    startSync();
  }, 5000);
}

startSync();
