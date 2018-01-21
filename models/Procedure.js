const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const procedureSchema = new Schema({
  name: { type: String },
  items: [{
    item: { type: Schema.Types.ObjectId, ref: 'Item' },
    useQuantity: { type: Number }
  }]
},
{
  timestamps: true
});

const Procedure = db.model('Procedure', procedureSchema);

module.exports = Procedure;
