const { Schema, model } = require('mongoose');

const BoardSchema = new Schema({
  name: { type: String, required: true },
  list: [
    {
      title: { type: String },
      description: { type: String },
      startDate: { type: Date },
      endDate: { type: Date }
    }
  ]
})

module.exports = model('Board', BoardSchema);
