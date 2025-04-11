# Consigna: Desarrollo de API CRUD de Usuarios

## Objetivo

Desarrollar una API REST básica para la gestión de usuarios que permita realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando Node.js, Express y MongoDB.

## Descripción General

Se requiere implementar un sistema de gestión de usuarios que permita almacenar y manipular información básica de personas. El sistema debe seguir una arquitectura organizada por capas y utilizar programación funcional (evitando el uso de clases).

## Requisitos Funcionales

### 1. Gestión de Usuarios

El sistema debe permitir:

- **Crear usuarios** con la siguiente información:
  - Nombre completo (obligatorio)
  - Correo electrónico (obligatorio y único)
  - Edad (opcional)
  - Estado (activo/inactivo, por defecto activo)
  - Fecha de creación (automática)

- **Consultar usuarios**:
  - Listar todos los usuarios registrados
  - Buscar un usuario específico por su identificador único

- **Actualizar usuarios**:
  - Modificar cualquier campo de un usuario existente
  - Validar que el correo electrónico siga siendo único

- **Eliminar usuarios**:
  - Eliminar permanentemente un usuario del sistema

### 2. Respuestas de la API

Todas las respuestas de la API deben seguir un formato consistente:

- **Respuestas exitosas**:
  ```json
  {
    "exito": true,
    "mensaje": "Mensaje descriptivo",
    "datos": { ... }  // Datos relevantes
  }
  ```

- **Respuestas de error**:
  ```json
  {
    "exito": false,
    "mensaje": "Descripción del error",
    "error": { ... }  // Detalles del error (opcional)
  }
  ```

## Requisitos Técnicos

### 1. Arquitectura

El proyecto debe seguir una arquitectura por capas:

- **Capa de Rutas**: Define los endpoints de la API
- **Capa de Controladores**: Maneja las peticiones HTTP y respuestas
- **Capa de Servicios**: Implementa la lógica de negocio
- **Capa de Modelos**: Define la estructura de los datos

### 2. Tecnologías

- **Backend**: Node.js con Express
- **Base de Datos**: MongoDB con Mongoose
- **Estilo de Programación**: Funcional (evitar el uso de clases)

### 3. Endpoints Requeridos

La API debe exponer los siguientes endpoints:

- `POST /api/usuarios`: Crear un nuevo usuario
- `GET /api/usuarios`: Obtener todos los usuarios
- `GET /api/usuarios/:id`: Obtener un usuario específico
- `PUT /api/usuarios/:id`: Actualizar un usuario existente
- `DELETE /api/usuarios/:id`: Eliminar un usuario

### 4. Manejo de Errores

La aplicación debe manejar adecuadamente los siguientes errores:

- Errores de validación (campos obligatorios, formato de email, etc.)
- Recursos no encontrados (usuario no existe)
- Errores de duplicidad (email ya registrado)
- Errores internos del servidor

## Entregables

1. **Código fuente** completo del proyecto

## Criterios de Evaluación

El proyecto será evaluado según los siguientes criterios:

1. **Funcionalidad**: Implementación correcta de todas las operaciones CRUD
2. **Arquitectura**: Organización adecuada del código en capas
3. **Calidad del código**: Legibilidad, mantenibilidad y uso de programación funcional
4. **Manejo de errores**: Gestión adecuada de casos de error
5. **Documentación**: Claridad y completitud del README

## Consideraciones Adicionales

- No es necesario implementar autenticación ni autorización
- Se valorará la simplicidad y claridad del código
- El proyecto debe ser fácil de instalar y ejecutar
- Se recomienda utilizar async/await para manejar operaciones asíncronas

## Bonus (Opcional)

Los siguientes elementos no son obligatorios pero sumarán puntos adicionales en la evaluación:

1. **Campo de contraseña**:
   - Agregar un campo de contraseña al modelo de usuario
   - Implementar el hash de la contraseña antes de almacenarla (usando bcrypt o similar)
   - Asegurar que la contraseña nunca se devuelva en las respuestas de la API
   - Crear un endpoint adicional para verificar credenciales (email/contraseña)

2. **Validaciones avanzadas**:
   - Validación de formato de email
   - Requisitos de complejidad para la contraseña
   - Validación de edad (número positivo)

---

Esta consigna establece los requisitos mínimos. Se valorarán mejoras o características adicionales que agreguen valor al proyecto, siempre que no comprometan la simplicidad y claridad del código base.
