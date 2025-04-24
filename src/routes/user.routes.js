const express = require("express");

const {
  crearUsuario,
  obtenerUsuarioPorId,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario,
  verificarCredenciales
} = require("../controllers/user.controller");


const router = express.Router();

// Ruta para crear un nuevo usuario.

router.post("/crear", crearUsuario);

// Ruta para traer TODOS los usuarios

router.get("/", obtenerUsuarios);

// Ruta para obtener un usuario especifico

router.get("/:id", obtenerUsuarioPorId);

// Ruta para actualizar un usuario 

router.put("/:id", actualizarUsuario)

// Ruta para eliminar un usuario

router.delete("/:id", eliminarUsuario)

// Ruta para verificar credenciales

router.post("/login", verificarCredenciales)

module.exports = router;
