// scripts/init-db.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/models/User');

// Conexión a MongoDB Atlas
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error conectando a MongoDB:', err.message);
    process.exit(1);
  }
}

// Datos de ejemplo
const sampleUsers = [
  { name: 'Ana López', email: 'ana@example.com', age: 25 },
  { name: 'Carlos Pérez', email: 'carlos@example.com', age: 30 },
  { name: 'Lucía Gómez', email: 'lucia@example.com', age: 28 }
];

async function initDB() {
  await connectDB();
  try {
    await User.deleteMany(); // Limpia la colección
    await User.insertMany(sampleUsers);
    console.log('✅ Usuarios de ejemplo insertados');
  } catch (err) {
    console.error('❌ Error al inicializar la BD:', err.message);
  } finally {
    mongoose.connection.close();
  }
}

initDB();
