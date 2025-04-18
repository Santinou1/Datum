const express = require("express");
const connectDB = require("./config/database");
const usuarioRoutes= require("./routes/user.routes")

// Inicializamos la app de Express.

const app = express();

// Middleware para parsear JSON.

app.use(express.json())

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
