const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String },
  code: { type: String },
  category: { type: String },
  cost: { type: Number },
  supplier: { type: String },
  unit: { type: String },
  quantity: { type: Number },
  parLevel: { type: Number },
  signature: { type: Schema.Types.ObjectId, ref: 'User' }
},
{
  timestamps: true
});

const Item = db.model('Item', itemSchema);

module.exports = Item;
