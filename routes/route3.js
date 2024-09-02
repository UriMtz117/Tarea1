// routes/route3.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Esta es la Ruta 3, no tiene middleware');
});

module.exports = router;
