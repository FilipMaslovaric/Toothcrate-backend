const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const User = db.model('User', {
    name: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = User;