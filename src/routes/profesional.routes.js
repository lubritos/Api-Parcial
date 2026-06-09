const { Router } = require("express");
const { editProfesional, listProfesional, getProfesionalId, createProfesional, removeProfesional } = require("../controller/profesional.controller");
const router = Router();

router.get("/", listProfesional)

router.get("/:id", getProfesionalId)

router.post('/', createProfesional)

router.put('/:id', editProfesional)

router.delete('/:id', removeProfesional)

module.exports = router;