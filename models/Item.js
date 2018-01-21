const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Item = db.model('Item', {
  name: { type: String },
  code: { type: String },
  category: { type: String },
  cost: { type: Number },
  supplier: { type: String },
  unit: { type: String },
  quantity: { type: Number },
  parLevel: { type: Number },
  signature: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

module.exports = Item;
