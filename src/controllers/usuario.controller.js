const usuarioService = require('../services/usuario.service');

/**
 * Crea un nuevo usuario
 * @param {Object} req - Objeto de solicitud
 * @param {Object} res - Objeto de respuesta
 */
const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await usuarioService.crearUsuario(req.body);
    res.status(201).json({
      exito: true,
      mensaje: 'Usuario creado exitosamente',
      datos: nuevoUsuario
    });
  } catch (error) {
    res.status(400).json({
      exito: false,
      mensaje: error.message,
      error: error
    });
  }
};

/**
 * Obtiene todos los usuarios
 * @param {Object} req - Objeto de solicitud
 * @param {Object} res - Objeto de respuesta
 */
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.obtenerUsuarios();
    res.status(200).json({
      exito: true,
      datos: usuarios
    });
  } catch (error) {
    res.status(500).json({
      exito: false,
      mensaje: 'Error al obtener usuarios',
      error: error.message
    });
  }
};

/**
 * Obtiene un usuario por su ID
 * @param {Object} req - Objeto de solicitud
 * @param {Object} res - Objeto de respuesta
 */
const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await usuarioService.obtenerUsuarioPorId(req.params.id);
    res.status(200).json({
      exito: true,
      datos: usuario
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
      mensaje: error.message,
      error: error
    });
  }
};

/**
 * Actualiza un usuario existente
 * @param {Object} req - Objeto de solicitud
 * @param {Object} res - Objeto de respuesta
 */
const actualizarUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await usuarioService.actualizarUsuario(
      req.params.id,
      req.body
    );
    res.status(200).json({
      exito: true,
      mensaje: 'Usuario actualizado exitosamente',
      datos: usuarioActualizado
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
      mensaje: error.message,
      error: error
    });
  }
};

/**
 * Elimina un usuario por su ID
 * @param {Object} req - Objeto de solicitud
 * @param {Object} res - Objeto de respuesta
 */
const eliminarUsuario = async (req, res) => {
  try {
    const resultado = await usuarioService.eliminarUsuario(req.params.id);
    res.status(200).json({
      exito: true,
      mensaje: resultado.mensaje
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
      mensaje: error.message,
      error: error
    });
  }
};

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};
