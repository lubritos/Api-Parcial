const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Api login Auth" });
})

router.get("/login", (req, res) => {
    res.json({ message: "Login" });
});

module.exports = router;