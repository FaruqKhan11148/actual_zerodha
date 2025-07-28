// const Listing = require('./models/listing');
// const { listingSchema, reviewSchema } = require('./schema.js');
// const ExpressError = require('./utils/ExpressError.js');
// const Review = require('./models/review');


module.exports.isLoggedIn = (req, res, next) => {
  if(!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash('error', 'you must be logged in, to create listing!');
    res.redirect('/login');
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
