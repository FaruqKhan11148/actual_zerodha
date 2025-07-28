const User = require('../model/user');
const passport = require('passport');

module.exports.register = async (req, res, next) => {
  const { username, password, email, phone, age, gender } = req.body;

  try {
    const newUser = new User({ username, email, phone, age, gender });

    const registeredUser = await User.register(newUser, password); // Uses passport-local-mongoose

    req.login(registeredUser, (err) => {
      if (err) {
        console.error("Login error after registration:", err);
        return res.status(500).json({ message: 'Login failed after registration', error: err });
      }
      res.status(200).json({ message: 'User registered successfully', user: registeredUser });
    });

  } catch (err) {
    if (err.name === 'UserExistsError') {
      return res.status(409).json({ message: 'Username already taken. Please choose another one.' });
    } else {
      console.error("Registration error:", err);
      return res.status(500).json({ message: 'Registration failed', error: err.message });
    }
  }
};

module.exports.login = (req, res) => {
  res.status(200).json({ message: 'Login successful', user: req.user });
};

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed', error: err });
    }
    res.status(200).json({ message: 'Logged out successfully' });
  });
};
