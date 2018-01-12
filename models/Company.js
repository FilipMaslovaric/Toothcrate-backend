const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Company = db.model('Company', {
    name: { type: String }
});

module.exports = Company;