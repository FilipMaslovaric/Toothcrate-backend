const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email', // Use email not username
  usernameLowerCase: true, // Treat emails as case-insensitive
  session: false // We'll use JWT
});

const User = db.model('User', userSchema);

module.exports = User;
