const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  _id: String,
  login: { type: String, required: true, unique: true },
  password: { type:String, required: true }
})

module.exports = model('User', UserSchema);
