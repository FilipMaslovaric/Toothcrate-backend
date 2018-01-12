const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Procedure = db.model('Procedure', {
    name: { type: String },
    items: [
        { type: Schema.Types.ObjectId, ref: 'Procedure' }
    ]
});

module.exports = Procedure;