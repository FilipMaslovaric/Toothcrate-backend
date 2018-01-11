const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const User = db.model('User', {
    name: { type: String }
});

module.exports = User;