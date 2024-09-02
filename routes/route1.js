// routes/route1.js
const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');

router.use(logger);

router.get('/', (req, res) => {
    res.send('Esta es la Ruta 1');
});

module.exports = router;
