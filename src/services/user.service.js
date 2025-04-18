const Usuario = require("../models/user.model");

// Crear un nuevo usuario.

const crearUsuario = async (usuarioData) => {
  try {
    const nuevoUsuario = new Usuario(usuarioData);
    return await nuevoUsuario.save();
  } catch (error) {
    console.error(error);
  }
};

// Obtener todos los usuarios.

const obtenerUsuarios = async () => {
  try {
    return await Usuario.find();
  } catch (error) {
    console.error(error);
  }
};

// Obtener un usuario por su ID.

const obtenerUsuarioPorId = async (id) => {
  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return "Usuario no encontrado";
    }
    return usuario;
  } catch (error) {
    console.error(error);
  }
};

// Actualizar un usuario existente

const actualizarUsuario = async (id, datosActualizados) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      datosActualizados,
      { new: true, runValidators: true }
    );

    if (!usuarioActualizado) {
      return "Usuario no encontrado";
    }
    return usuarioActualizado;
  } catch (error) {
    console.log("ESTAS EN UN ERROR " + error);
  }
};

// Eliminar un usuario

const eliminarUsuario = async (id) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);

    if (!usuarioEliminado) {
      return "Usuario no encontrado";
    }

    return { mensaje: "Usuario eliminado correctamente" };
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
};
