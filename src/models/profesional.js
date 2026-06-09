const mongoose = require('mongoose');

const profesionalSchema = new mongoose.Schema({
  nombre: { type: String, required: true, },
  especialidad: { type: String, required: true },
  descripcion: { type: String },
}, { collection: 'profesional'});

const profesional = mongoose.model('Profesional', profesionalSchema);

module.exports = profesional;