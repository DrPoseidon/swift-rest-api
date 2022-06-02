const { Schema, model } = require('mongoose');

const BoardSchema = new Schema({
  _id: String,
  name: { type: String, required: true },
  list: [
    {
      _id: String,
      title: { type: String },
      description: { type: String },
      startDate: { type: Date },
      endDate: { type: Date }
    }
  ]
})

module.exports = model('Board', BoardSchema);
