const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const procedureHistorySchema = new Schema({
  procedure: { type: Schema.Types.ObjectId, ref: 'Procedure' },
  dentist: { type: Schema.Types.ObjectId, ref: 'User' },
  location: { type: String }
},
{ 
  timestamps: true 
})

const ProcedureHistory = db.model('ProcedureHistory', procedureHistorySchema);

module.exports = ProcedureHistory;
