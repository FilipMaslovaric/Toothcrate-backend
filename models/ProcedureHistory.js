const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const ProcedureHistory = db.model('ProcedureHistory', {
    procedure: { type: Schema.Types.ObjectId, ref: 'Procedure' },
    dentist: { type: Schema.Types.ObjectId, ref: 'User' }, 
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = ProcedureHistory;