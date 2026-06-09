const { Router } = require("express");
const path = require('path');
const router = Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
router.get('/register', (req, res) => {
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


module.exports = router;