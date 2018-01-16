const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Item = db.model('Item', {
  name: { type: String },
  code: { type: String },
  cost: { type: Number },
  supplier: { type: String },
  unit: { type: String },
  quantity: {
    surgery1: { type: Number },
    surgery2: { type: Number },
    surgery3: { type: Number },
    stock: { type: Number },
    total: { type: Number }
  },
  parLevel: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  signature: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = Item;
