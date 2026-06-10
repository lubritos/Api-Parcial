const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  rol: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  dni: { type: Number},
  socialwork: { type: String, required: true },
  password: { type: String, required: true },
}, { collection: 'usuarios'});

const User = mongoose.model('User', userSchema);

module.exports = User;