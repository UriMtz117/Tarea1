"use strict";

// routes/route1.js
var express = require('express');

var router = express.Router();

var logger = require('../middlewares/logger');

router.use(logger);
router.get('/', function (req, res) {
  res.send('Esta es la Ruta 1');
});
module.exports = router;
//# sourceMappingURL=route1.dev.js.map
