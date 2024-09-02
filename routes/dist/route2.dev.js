"use strict";

// routes/route2.js
var express = require('express');

var router = express.Router();

var logger = require('../middlewares/logger');

router.use(logger);
router.get('/', function (req, res) {
  res.send('Esta es la Ruta 2');
});
module.exports = router;
//# sourceMappingURL=route2.dev.js.map
