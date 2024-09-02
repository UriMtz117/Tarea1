"use strict";

// middlewares/logger.js
var logger = function logger(req, res, next) {
  var currentDateTime = new Date();
  console.log("Fecha y Hora: ".concat(currentDateTime.toISOString()));
  console.log('Accediste a la ruta:', req.originalUrl);
  next();
};

module.exports = logger;
//# sourceMappingURL=logger.dev.js.map
