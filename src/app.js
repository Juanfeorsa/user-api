const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// prefijo para las rutas
app.use('/api/users', userRoutes);

// ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API User Management - OK' });
});

module.exports = app;