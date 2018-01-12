const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const ProcedureHistory = db.model('ProcedureHistory', {
    procedure: { type: Schema.Types.ObjectId, ref: 'Procedure' },
    dentist: { type: String },
    location: { type: String }
});

module.exports = ProcedureHistory;