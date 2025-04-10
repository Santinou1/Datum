const express = require("express");
const connectDB = require("./config/database");
const usuarioRoutes = require("./routes/usuario.routes");

// Inicializar la app de Express
const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Ruta de bienvenida
app.get("/", (req, res) => {
    res.send("Bienvenido a la API de Usuarios");
});

// Rutas de usuarios
app.use("/api/usuarios", usuarioRoutes);

const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});