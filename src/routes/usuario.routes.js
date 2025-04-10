const express = require('express');
const { 
  crearUsuario, 
  obtenerUsuarios, 
  obtenerUsuarioPorId, 
  actualizarUsuario, 
  eliminarUsuario 
} = require('../controllers/usuario.controller');

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/', crearUsuario);

// Ruta para obtener todos los usuarios
router.get('/', obtenerUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/:id', obtenerUsuarioPorId);

// Ruta para actualizar un usuario
router.put('/:id', actualizarUsuario);

// Ruta para eliminar un usuario
router.delete('/:id', eliminarUsuario);

module.exports = router;
