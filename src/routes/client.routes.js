const { Router } = require("express");
const path = require('path');
const router = Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
router.get('/registrar', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/registrar.html'));
});

router.get('/portal', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/portal.html'));
});

router.get('/profesional', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/profesional.html'));
});

router.get('/profesional/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/nuevo_profesional.html'));
});

router.get('/nuevo_profesional', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/nuevo_profesional.html'));
});

router.get('/turno', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/turno.html'));
});

router.get('/turno/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/nuevo_turno.html'));
});

router.get('/nuevo_turno', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/nuevo_turno.html'));
});

module.exports = router;