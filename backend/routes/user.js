const express = require('express');
const router = express.Router();
const passport = require('passport');
const wrapAsync = require('../utils/wrapAsync');
const { saveRedirectUrl } = require('../middleware.js');
const userController = require('../controller/user');


router.route("/register")
  .post(wrapAsync(userController.register));

router.route("/login")
  .post(
    saveRedirectUrl,
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: true,
      failureMessage: 'Invalid credentials. Please try again.',
    }),
    userController.login
  );

router.get('/logout', userController.logout);

module.exports = router;
