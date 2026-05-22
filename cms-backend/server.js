const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const { AdminUser, sequelize, Banner, AboutUs, Industry, Service, Project, Partner, News, ContactInfo, FormSubmission, FormField, Feedback, FAQ } = require('./models');

const app = express();
const PORT = process.env.PORT || 3005;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(session({
  secret: 'uav-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

// Auth Middleware
const requireAuth = (req, res, next) => {
  if (req.session.adminId) {
    next();
  } else {
    res.redirect('/admin/login');
  }
};

// API Endpoints for frontend
app.get('/api/contact-info', async (req, res) => {
  const info = await ContactInfo.findAll();
  res.json(info);
});

app.get('/api/industries', async (req, res) => {
  const data = await Industry.findAll();
  res.json(data);
});

// Admin Routes
app.get('/admin/login', (req, res) => {
  res.render('login', { error: null });
});

app.get('/admin.html', (req, res) => {
  res.render('login', { error: null });
});

app.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await AdminUser.findOne({ where: { username } });
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.adminId = user.id;
    res.redirect('/admin/dashboard');
  } else {
    res.render('login', { error: 'Sai tài khoản hoặc mật khẩu' });
  }
});

app.get('/admin/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
});

app.get('/admin/dashboard', requireAuth, async (req, res) => {
  res.render('dashboard');
});

// Starting server
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
