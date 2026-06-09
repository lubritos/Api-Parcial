const mongoose = require('mongoose');

const turnoSchema = new mongoose.Schema({
  profesional: { type: String, required: true, },
  especialidad: { type: String, required: true },
  fecha: { type: String },
  hora: { type: String },
  paciente: { type: String },
}, { collection: 'turnos'});

const turno = mongoose.model('Turno', turnoSchema);

module.exports = turno;