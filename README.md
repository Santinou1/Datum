# API CRUD de Usuarios con MongoDB y Express

Este proyecto es una API REST básica para gestionar usuarios, implementada con Node.js, Express y MongoDB (Mongoose). Sigue una arquitectura organizada por capas que separa claramente las responsabilidades.

## 📋 Estructura del Proyecto

```
src/
  ├── config/         # Configuraciones (conexión a la base de datos)
  ├── controllers/    # Controladores (manejo de peticiones HTTP)
  ├── models/         # Modelos (esquemas de datos)
  ├── routes/         # Rutas (endpoints de la API)
  ├── services/       # Servicios (lógica de negocio)
  └── index.js        # Punto de entrada de la aplicación
```

## 🧩 Arquitectura: Una Analogía con un Restaurante

Imagina que nuestra API es como un restaurante:

1. **Clientes (Usuarios de la API)**: Hacen pedidos a través de la carta (endpoints).

2. **Camareros (Funciones del Controlador)**: Reciben los pedidos de los clientes, los anotan y los llevan a la cocina. Luego, traen la comida de vuelta a los clientes.

3. **Cocineros (Funciones del Servicio)**: Preparan los platos según las recetas. Tienen el conocimiento de cómo cocinar cada plato.

4. **Recetas (Modelos)**: Definen cómo debe ser cada plato, qué ingredientes lleva y cómo debe prepararse.

5. **Carta del Menú (Rutas)**: Lista de platos disponibles y cómo pedirlos.

6. **Almacén (Base de Datos)**: Donde se guardan todos los ingredientes y se registran los pedidos.

## 🚀 Cómo Funciona

### Modelo (Usuario)

Es como la receta de un plato. Define qué información debe tener un usuario:
- Nombre
- Email
- Edad
- Estado (activo/inactivo)
- Fecha de creación

### Servicios (Funciones)

Son como las recetas específicas para preparar cada plato:
- `crearUsuario`: Función para crear usuarios nuevos
- `obtenerUsuarios`: Función para buscar todos los usuarios
- `obtenerUsuarioPorId`: Función para buscar un usuario específico
- `actualizarUsuario`: Función para modificar usuarios existentes
- `eliminarUsuario`: Función para eliminar usuarios

### Controladores (Funciones)

Son como las instrucciones para los camareros:
- `crearUsuario`: Recibe la petición, valida los datos y pide al servicio que cree el usuario
- `obtenerUsuarios`: Pide al servicio la lista de usuarios y la entrega al cliente
- `obtenerUsuarioPorId`: Busca un usuario específico y lo entrega al cliente
- `actualizarUsuario`: Recibe los cambios y pide al servicio que los aplique
- `eliminarUsuario`: Pide al servicio que elimine un usuario y confirma el resultado

### Rutas (Express Router)

Es como la carta del restaurante que muestra:
- POST /api/usuarios → Crear un nuevo usuario
- GET /api/usuarios → Obtener todos los usuarios
- GET /api/usuarios/:id → Obtener un usuario específico
- PUT /api/usuarios/:id → Actualizar un usuario
- DELETE /api/usuarios/:id → Eliminar un usuario

## 🔧 Instalación y Uso

1. **Requisitos previos**:
   - Node.js instalado
   - MongoDB instalado y ejecutándose localmente

2. **Instalación**:
   ```bash
   # Instalar dependencias
   npm install
   ```

3. **Ejecución**:
   ```bash
   # Iniciar el servidor
   npm start
   ```

4. **Uso de la API**:
   - Crear usuario: `POST http://localhost:3000/api/usuarios`
   - Obtener usuarios: `GET http://localhost:3000/api/usuarios`
   - Obtener usuario por ID: `GET http://localhost:3000/api/usuarios/:id`
   - Actualizar usuario: `PUT http://localhost:3000/api/usuarios/:id`
   - Eliminar usuario: `DELETE http://localhost:3000/api/usuarios/:id`

## 📝 Ejemplo de Uso

### Crear un usuario

```bash
curl -X POST http://localhost:3000/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Pérez",
    "email": "juan@ejemplo.com",
    "edad": 30
  }'
```

### Obtener todos los usuarios

```bash
curl -X GET http://localhost:3000/api/usuarios
```

## 🧠 Conceptos Clave Explicados

### ¿Qué es un CRUD?

CRUD son las siglas de Create (Crear), Read (Leer), Update (Actualizar) y Delete (Eliminar). Es como administrar una biblioteca:
- **Create**: Añadir un nuevo libro a la biblioteca
- **Read**: Consultar qué libros hay o buscar un libro específico
- **Update**: Cambiar información de un libro (título, autor, etc.)
- **Delete**: Retirar un libro de la biblioteca

### ¿Qué es Mongoose?

Mongoose es como un traductor entre JavaScript y MongoDB. Imagina que MongoDB habla un idioma (documentos BSON) y tu aplicación habla otro (objetos JavaScript). Mongoose traduce entre ambos para que puedan entenderse.

### ¿Qué es async/await?

Es como pedir comida para llevar:
- **async**: "Voy a hacer un pedido que tomará tiempo"
- **await**: "Esperaré aquí hasta que mi pedido esté listo"

En lugar de quedarte esperando activamente, puedes hacer otras cosas mientras se prepara tu pedido, y cuando esté listo, te avisarán.

### ¿Qué es la Programación Funcional?

La programación funcional es como una receta de cocina donde:
- Cada paso está claramente definido como una función independiente
- Cada función hace una sola cosa y la hace bien
- Las funciones no cambian ingredientes que no les pertenecen
- Puedes combinar funciones como si fueran pasos de una receta

Por ejemplo, en lugar de tener un chef que sabe hacer todo (una clase), tenemos especialistas para cada tarea (funciones): uno que corta las verduras, otro que prepara la salsa, otro que cocina la carne, etc.

## 📚 Conclusión

Este proyecto demuestra cómo implementar un CRUD básico siguiendo un enfoque de programación funcional. Cada función tiene una responsabilidad única y clara, lo que hace que el código sea más mantenible, testeable y fácil de entender.
