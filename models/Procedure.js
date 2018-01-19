const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Procedure = db.model('Procedure', {
  name: { type: String },
  items: [{
    item:  { type: Schema.Types.ObjectId, ref: 'Item' },
    useQuantity: { type: Number }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = Procedure;
