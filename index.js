const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno desde .env
require("./conexion.mongoose")

const app = express();
app.use(express.json()); // Middleware para procesar JSON


// Definir las rutas (opcional)
const boletoRoutes = require('./routes/boletos'); // Asegúrate de que esta ruta sea correcta
app.use('/api/boletos', boletoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
