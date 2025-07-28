const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: String,
  age: Number,
  gender: String,
});

// 👇 This plugin adds `username`, `salt`, `hash`, and helper methods like register, authenticate etc.
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
