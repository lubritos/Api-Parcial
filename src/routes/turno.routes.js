const Router = require("express");

const { editTurno, listTurno, getTurnoId, createTurno, removeTurno } = require("../controller/turno.controller");
const router = Router();

router.get("/", listTurno)

router.get("/:id", getTurnoId)

router.post('/', createTurno)

router.put('/:id', editTurno)

router.delete('/:id', removeTurno)

module.exports = router;