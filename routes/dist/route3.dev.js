"use strict";

// routes/route3.js
var express = require('express');

var router = express.Router();
router.get('/', function (req, res) {
  res.send('Esta es la Ruta 3, no tiene middleware');
});
module.exports = router;
//# sourceMappingURL=route3.dev.js.map
