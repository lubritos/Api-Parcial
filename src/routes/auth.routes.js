const { Router } = require("express");
const { listUsers, loginUser, createUser } = require("../controller/user.controller");

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Api login Auth" });
})

router.get("/user", listUsers);

router.post("/login", loginUser);

router.post("/user", createUser);

module.exports = router;