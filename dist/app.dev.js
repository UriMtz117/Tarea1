"use strict";

// app.js
var express = require('express');

var app = express();

var route1 = require('./routes/route1');

var route2 = require('./routes/route2');

var route3 = require('./routes/route3');

app.use('/ruta1', route1);
app.use('/ruta2', route2);
app.use('/ruta3', route3);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Servidor corriendo en http://localhost:".concat(PORT));
});
//# sourceMappingURL=app.dev.js.map
