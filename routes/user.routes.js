const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  console.log(req.user);
  res.render('logged', { name: req.user.displayName, image: req.user._json.picture });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile/', (req, res) => {
  console.log(req.user);
  if (!req.user) {
    res.render('noPermission');
  } else res.render('profile');
});

router.get('/profile/settings', (req, res) => {
  console.log(req.user);
  if (!req.user) {
    res.render('noPermission');
  } else res.render('settings');
});

router.get('/logged/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:8000/');
});

module.exports = router;
