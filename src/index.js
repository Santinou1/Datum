const express = require("express");
const connectDB = require("./config/database");
const usuarioRoutes= require("./routes/user.routes");
const cors = require("cors");

// Inicializamos la app de Express.

const app = express();

// Middleware para parsear JSON.

app.use(express.json())

// Configuración de CORS para permitir acceso desde cualquier origen
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Conectar a la base de datos.

connectDB();

// Ruta de bienvenida

app.get("/", (req,res)=>{
    res.send("Bienvenido a la API de Usuarios")
})

// Ruta de usuarios

app.use("/api/usuarios", usuarioRoutes)

// Iniciar el servidor

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servirodr corriendo en http://localhost:${PORT}`);
});
