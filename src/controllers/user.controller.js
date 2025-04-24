const usuarioService = require("../services/user.service");

// Crear nuevo usuario

const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await usuarioService.crearUsuario(req.body);
    res.status(201).json({
      exito: true,
      mensaje: "Usuario creado exitosamente",
      datos: nuevoUsuario,
    });
  } catch (error) {
    let statusCode = 500;
    if (error.tipo === "ValidationError") {
      statusCode = 400;
    }

    const respuesta = {
      exito: false,
      mensaje: error.mensaje || "Error al crear usuario",
    };

    res.status(statusCode).json(respuesta);
  }
};

// Obtener todos los usuarios

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.obtenerUsuarios();
    res.status(200).json({
      exito: true,
      datos: usuarios,
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
      mensaje: error,
    });
  }
};

// Obtener un usuario por Id

const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await usuarioService.obtenerUsuarioPorId(req.params.id);
    res.status(200).json({
      exito: true,
      datos: usuario,
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
      message: error,
    });
  }
};

// Actualiza un usuario existente

const actualizarUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await usuarioService.actualizarUsuario(
      req.params.id,
      req.body
    );
    res.status(200).json({
      exito: true,
      mensaje: "Usuario actualizado correctamente",
      datos: usuarioActualizado,
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
    });
  }
};

// Eliminar un usuario

const eliminarUsuario = async (req, res) => {
  try {
    await usuarioService.eliminarUsuario(req.params.id);
    res.status(200).json({
      exito: true,
      mensaje: "El usuario se elimino correctamente",
    });
  } catch (error) {
    res.status(404).json({
      exito: false,
    });
  }
};

const verificarCredenciales = async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    if (!email || !contraseña) {
      return res.status(400).json({
        exito: false,
        mensaje: "Email y contraseña requeridos",
      });
    }

    const resultado = await usuarioService.verificarCredenciales(
      email,
      contraseña
    );

    if (!resultado.exito) {
      return res.status(401).json({
        exito: false,
        mensaje: resultado.mensaje,
      });
    }

    res.status(200).json({
      exito: true,
      mensaje: "Credenciales verificadas correctamente",
      datos: resultado.usuario,
    });
  } catch (error) {
    res.status(500).json({
      exitos: false,
      mensaje: "Error al verificar credenciales",
      error: error.message,
    });
  }
};

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
  verificarCredenciales
};
