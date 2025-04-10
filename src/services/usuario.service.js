const Usuario = require('../models/usuario.model');

/**
 * Crea un nuevo usuario
 * @param {Object} usuarioData - Datos del usuario a crear
 * @returns {Promise<Object>} Usuario creado
 */
const crearUsuario = async (usuarioData) => {
  try {
    const nuevoUsuario = new Usuario(usuarioData);
    return await nuevoUsuario.save();
  } catch (error) {
    throw error;
  }
};

/**
 * Obtiene todos los usuarios
 * @returns {Promise<Array>} Lista de usuarios
 */
const obtenerUsuarios = async () => {
  try {
    return await Usuario.find({});
  } catch (error) {
    throw error;
  }
};

/**
 * Obtiene un usuario por su ID
 * @param {String} id - ID del usuario
 * @returns {Promise<Object>} Usuario encontrado
 */
const obtenerUsuarioPorId = async (id) => {
  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    return usuario;
  } catch (error) {
    throw error;
  }
};

/**
 * Actualiza un usuario existente
 * @param {String} id - ID del usuario a actualizar
 * @param {Object} datosActualizados - Datos a actualizar
 * @returns {Promise<Object>} Usuario actualizado
 */
const actualizarUsuario = async (id, datosActualizados) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      datosActualizados,
      { new: true, runValidators: true }
    );
    
    if (!usuarioActualizado) {
      throw new Error('Usuario no encontrado');
    }
    
    return usuarioActualizado;
  } catch (error) {
    throw error;
  }
};

/**
 * Elimina un usuario por su ID
 * @param {String} id - ID del usuario a eliminar
 * @returns {Promise<Object>} Resultado de la operación
 */
const eliminarUsuario = async (id) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    
    if (!usuarioEliminado) {
      throw new Error('Usuario no encontrado');
    }
    
    return { mensaje: 'Usuario eliminado correctamente' };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};
