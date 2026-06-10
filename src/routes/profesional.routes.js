const { Router } = require("express");
const { editProfesional, listProfesional, getProfesionalId, createProfesional, removeProfesional } = require("../controller/profesional.controller");
const autenticarJWT = require('../middlewares/authMiddleware');
const router = Router();

router.get("/", autenticarJWT, listProfesional)

router.get("/:id", autenticarJWT, getProfesionalId)

router.post('/', autenticarJWT, createProfesional)

router.put('/:id', autenticarJWT, editProfesional)

router.delete('/:id', autenticarJWT, removeProfesional)

module.exports = router;