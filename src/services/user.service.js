const Usuario = require("../models/user.model");

const bcrypt = require("bcrypt");

// Crear un nuevo usuario.

const crearUsuario = async (usuarioData) => {
  try {
    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const contraseñaHasheada = await bcrypt.hash(usuarioData.contraseña, salt);
    usuarioData.contraseña = contraseñaHasheada;

    const nuevoUsuario = new Usuario(usuarioData);
    return await nuevoUsuario.save();
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      const errores = Object.values(error.errors).map((err) => err.message);
      throw {
        tipo: "ValidationError",
        mensaje: "Error de validacion",
        errores: errores,
      };
    }

    throw {
      tipo: error.name || "ERROR",
      mensaje: error.message || "Ocurrio un error al crear usuario",
    };
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
    // Si viene una nueva contraseña, la hasheamos
    if (datosActualizados.contraseña) {
      const salt = await bcrypt.genSalt(10);
      datosActualizados.contraseña = await bcrypt.hash(
        datosActualizados.contraseña,
        salt
      );
    }

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
    console.log("Error al actualizar usuario:", error);
    throw error;
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

// Verificar Credenciales

const verificarCredenciales = async (email, contraseña) => {
  try {
    const usuario = await Usuario.findOne({ email }).select("+contraseña");

    if (!usuario) {
      return { exito: false, mensaje: "Credenciales inválidas" };
    }

    const contraseñaValida = await bcrypt.compare(
      contraseña,
      usuario.contraseña
    );

    if (!contraseñaValida) {
      return { exito: false, mensaje: "Credenciales inválidas" };
    }

    const usuarioSinContraseña = usuario.toObject();
    delete usuarioSinContraseña.contraseña;

    return { exito: true, usuario: usuarioSinContraseña };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
  verificarCredenciales,
};
