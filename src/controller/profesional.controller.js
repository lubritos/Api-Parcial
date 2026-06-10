const Profesional = require('../models/profesional');

const createProfesional = async (req, res) => {
    try {
        if (req.user.rol !== 'admin') {
            res.status(401).json({
                message: 'No autorizado',
                error: false,
            });
        }
        const body = req.body;
        const newProfesional = new Profesional({
            nombre: body.nombre,
            especialidad: body.especialidad,
            descripcion: body.descripcion,
        });

        const saved = await newProfesional.save();

        res.status(201).json({
            message: 'Profesional creado exitosamente',
            error: false,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

async function editProfesional(req, res) {
    try {
        if (req.user.rol !== 'admin') {
            res.status(401).json({
                message: 'No autorizado',
                error: false,
            });
        }
        const id = req.params.id;
        const body = req.body;
        const profesional = await Profesional.findByIdAndUpdate(id, body, { new: true });
        res.status(201).json({
            message: 'Profesional editado exitosamente',
            error: false,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al editar Profesional',
            error: false,
        });
    }
}

async function listProfesional(req, res) {
    try {
        const profesional = await Profesional.find();
        res.json(profesional);
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar Profesional',
            error: false,
        });
    }
}

async function getProfesionalId(req, res) {
    try {
        if (req.user.rol !== 'admin') {
            res.status(401).json({
                message: 'No autorizado',
                error: false,
            });
        }
        const profesional = await Profesional.findById(req.params.id);
        res.json(profesional);
    } catch (error) {
        
    }
}

async function removeProfesional(req, res) {
    try {
        if (req.user.rol !== 'admin') {
            res.status(401).json({
                message: 'No autorizado',
                error: false,
            });
        }
        const id = req.params.id;
        const profesional = await Profesional.findByIdAndDelete(id);
        res.json(profesional);
    } catch (error) {
        
    }
}


module.exports = {
    editProfesional,
    getProfesionalId,
    createProfesional,
    listProfesional,
    removeProfesional
}