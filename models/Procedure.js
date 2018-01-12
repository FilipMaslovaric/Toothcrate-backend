const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Procedure = db.model('Procedure', {
    name: { type: String },
    dentist: { type: String },
    location: { type: String }
});

module.exports = Procedure;