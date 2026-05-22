const { Client } = require('ssh2');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');

const conn = new Client();

console.log('Connecting to VPS to pull files...');

conn.on('ready', () => {
  console.log('SSH connection established. Launching SFTP...');
  conn.sftp((err, sftp) => {
    if (err) {
      console.error('SFTP initialization failed:', err);
      conn.end();
      return;
    }

    const localBaseDir = __dirname;
    const remoteBaseDir = config.remotePath;

    // Helper function to recursively download a directory
    async function downloadDir(remoteDir, localDir) {
      if (!fs.existsSync(localDir)) {
        fs.mkdirSync(localDir, { recursive: true });
      }

      return new Promise((resolve, reject) => {
        sftp.readdir(remoteDir, async (err, list) => {
          if (err) return reject(err);

          for (const item of list) {
            const remoteItemPath = path.posix.join(remoteDir, item.filename);
            const localItemPath = path.join(localDir, item.filename);

            // Skip ignored files/directories
            if (config.ignore.includes(item.filename)) {
              console.log(`Skipping ignored item: ${item.filename}`);
              continue;
            }

            if (item.attrs.isDirectory()) {
              await downloadDir(remoteItemPath, localItemPath);
            } else {
              console.log(`Downloading: ${remoteItemPath} -> ${localItemPath}`);
              await new Promise((res, rej) => {
                sftp.fastGet(remoteItemPath, localItemPath, (getErr) => {
                  if (getErr) {
                    console.error(`Failed to download ${item.filename}:`, getErr);
                    rej(getErr);
                  } else {
                    res();
                  }
                });
              });
            }
          }
          resolve();
        });
      });
    }

    downloadDir(remoteBaseDir, localBaseDir)
      .then(() => {
        console.log('\nAll files successfully pulled from VPS!');
        conn.end();
      })
      .catch((err) => {
        console.error('Error while pulling files:', err);
        conn.end();
      });
  });
}).on('error', (err) => {
  console.error('SSH Connection error:', err);
}).connect({
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password
});
