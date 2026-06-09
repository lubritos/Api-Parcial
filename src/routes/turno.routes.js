const Router = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Api shift" });
})

module.exports = router;