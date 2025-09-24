# 🧑‍💻 User API – Prueba Desarrollador Jr Backend

Mini API RESTful para la **gestión de usuarios** desarrollada en **Node.js** con **Express** y **MongoDB Atlas**, como parte de la prueba técnica para perfil Jr Backend.

---

## 🚀 Requisitos previos
- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/)
- Cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) o instancia local de MongoDB
- [Git](https://git-scm.com/)

---

## ⚙ Instalación y configuración
1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/user-api.git
   cd user-api

## 📌 Endpoints disponibles
Base URL: `http://localhost:3000/api/users`

| Método  | Endpoint          | Descripción                   | Ejemplo Body (JSON)                 |
|---------|-----------------|-------------------------------|------------------------------------|
| GET     | `/`              | Healthcheck                   | —                                  |
| POST    | `/api/users`     | Crear usuario                 | `{ "name": "Ana", "email": "ana@example.com", "age": 25 }` |
| GET     | `/api/users`     | Listar todos los usuarios     | —                                  |
| GET     | `/api/users/:id` | Obtener usuario por ID        | —                                  |
| PUT     | `/api/users/:id` | Actualizar usuario por ID     | `{ "age": 30 }`                    |
| DELETE  | `/api/users/:id` | Eliminar usuario por ID       | —                                  |
