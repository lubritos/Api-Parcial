const { Router } = require("express");
const { loginUser, createUser } = require("../controller/user.controller");

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Api login Auth" });
})

router.post("/login", loginUser);

router.post("/register", createUser);

module.exports = router;