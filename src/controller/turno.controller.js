const Turno = require('../models/Turno');

const createTurno = async (req, res) => {
    try {
        const body = req.body;
        const newTurno = new Turno({
            profesional: body.profesional,
            especialidad: body.especialidad,
            fecha: body.fecha,
            hora: body.hora,
            paciente: body.paciente,
            estado: body.estado
        });

        const saved = await newTurno.save();

        res.status(201).json({
            message: 'Turno creado exitosamente',
            error: false,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

async function editTurno(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        const ElementTurno = await Turno.findByIdAndUpdate(id, body, { new: true });
        res.status(201).json({
            message: 'Turno editado exitosamente',
            error: false,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al editar Turno',
            error: false,
        });
    }
}

async function listTurno(req, res) {
    try {
        if (req.user.rol !== 'admin') {
            const listTurnos = await Turno.find({ paciente: req.user.id });
            res.json(listTurnos);
        }
        const listTurnos = await Turno.find();
        res.json(listTurnos);
    } catch (error) {
        res.status(500).json({
            message: 'Error al traer Turnos',
            error: false,
        });
    }
}

async function getTurnoId(req, res) {
    try {
        const ElementTurno = await Turno.findById(req.params.id);
        res.json(ElementTurno);
    } catch (error) {
        res.status(500).json({
            message: 'Error al traer Turno',
            error: false,
        });
    }
}

async function removeTurno(req, res) {
    try {
        const id = req.params.id;
        const ElementTurno = await Turno.findByIdAndDelete(id);
        res.json(ElementTurno);
    } catch (error) {
        
    }
}


module.exports = {
    editTurno,
    getTurnoId,
    createTurno,
    listTurno,
    removeTurno
}