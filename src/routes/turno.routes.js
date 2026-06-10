const Router = require("express");

const { editTurno, listTurno, getTurnoId, createTurno, removeTurno } = require("../controller/turno.controller");
const autenticarJWT = require('../middlewares/authMiddleware');
const router = Router();

router.get("/", autenticarJWT, listTurno)

router.get("/:id", autenticarJWT, getTurnoId)

router.post('/', autenticarJWT, createTurno)

router.put('/:id', autenticarJWT, editTurno)

router.delete('/:id', autenticarJWT, removeTurno)

module.exports = router;