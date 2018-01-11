const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Template = db.model('Template', {
    name: { type: String },
    items: []
});

module.exports = Template;