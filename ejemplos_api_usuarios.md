# 📘 Ejemplos de Requerimientos HTTP - API de Usuarios

Base URL: `https://datum-r718y6flh-santinou1s-projects.vercel.app`

---

## 🟢 1. Crear Usuario (POST)

**URL**: `https://datum-r718y6flh-santinou1s-projects.vercel.app/usuarios`  
**Método**: `POST`  
**Headers**:
```http
Content-Type: application/json
```

**Body (JSON)**:
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "edad": 30
}
```

---

## 📄 2. Obtener Todos los Usuarios (GET)

**URL**: `https://datum-r718y6flh-santinou1s-projects.vercel.app/usuarios`  
**Método**: `GET`

---

## 🔍 3. Obtener Usuario por ID (GET)

**URL**: `https://datum-r718y6flh-santinou1s-projects.vercel.app/usuarios/<id>`  
**Método**: `GET`  

**Ejemplo**:
```
https://datum-r718y6flh-santinou1s-projects.vercel.app/usuarios/661f2e3f4b6c9b28a1e8a99a
```

---

## ✏️ 4. Actualizar Usuario (PUT)

**URL**: `https://datum-r718y6flh-santinou1s-projects.vercel.app/usuarios/<id>`  
**Método**: `PUT`  
**Headers**:
```http
Content-Type: application/json
```

**Body (JSON)**:
```json
{
  "nombre": "Juan Carlos Pérez",
  "edad": 31
}
```

**Ejemplo**:
```
https://datum-r718y6flh-santinou1s-projects.vercel.app/usuarios/661f2e3f4b6c9b28a1e8a99a
```

---

## ❌ 5. Eliminar Usuario (DELETE)

**URL**: `https://datum-r718y6flh-santinou1s-projects.vercel.app/usuarios/<id>`  
**Método**: `DELETE`  

**Ejemplo**:
```
https://datum-r718y6flh-santinou1s-projects.vercel.app/usuarios/661f2e3f4b6c9b28a1e8a99a
```

---
