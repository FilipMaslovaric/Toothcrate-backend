const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const User = db.model('User', {
  name: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = User;
