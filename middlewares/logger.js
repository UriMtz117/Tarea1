// middlewares/logger.js
const logger = (req, res, next) => {
    const currentDateTime = new Date();
    console.log(`Fecha y Hora: ${currentDateTime.toISOString()}`);
    console.log('Accediste a la ruta:', req.originalUrl);
    next();
};

module.exports = logger;
