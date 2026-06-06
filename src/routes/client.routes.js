const { Router } = require("express");
const path = require('path');
const router = Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/product.html'));
});

module.exports = router;