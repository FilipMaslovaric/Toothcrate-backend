const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Procedure = db.model('Procedure', {
    name: { type: String },
    items: [
        [
            { type: Schema.Types.ObjectId, ref: 'Item' }, 
            { procedureQuantity: {type: Number}} 
        ]
    ],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = Procedure;