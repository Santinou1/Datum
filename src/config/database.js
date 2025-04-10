const mongoose = require('mongoose');

/**
 * Conecta a la base de datos MongoDB
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/usuarios_db');
    console.log('MongoDB conectado exitosamente');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;