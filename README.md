#  Sistema de Gestión de Productos

## 📋 Descripción

Sistema de gestión de productos y usuarios con autenticación, panel de administración y gestión de inventario. Desarrollado con Next.js y Node.js.

## ✨ Características

- 🔐 Autenticación de usuarios
- 📦 Gestión de productos
- 👥 Administración de usuarios
- 📊 Panel de administración
- 📱 Diseño responsive
- 📄 Documentación API con Swagger


## 💻 Tecnologías

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js con TypeScript
- Express.js
- Base de datos  MongoDB
- ODM: Mongoose
- Autenticación con JWT 


## 📦 Instalación

### Backend

1. Clonar y acceder al directorio del backend:
   ```bash
   cd backend
   ```
2. Crear un archivo llamado `.env` en la carpeta `backend` y agregar las credenciales que serán enviadas al correo.  
3. Asegurarse de estar en la carpeta `backend` y ejecutar el siguiente comando para iniciar el servidor:
   ```bash
   npm run dev
   ```
4. Una vez ejecutado, el backend estará corriendo en `http://localhost:5001`.  
5. Para acceder a la documentación de la API en Swagger, ir a:  
   ```
   http://localhost:5001/api-docs
   ```

### Frontend

1. Acceder al directorio del frontend:
   ```bash
   cd frontend
   ```
2. Crear un archivo llamado `.env.local` en la carpeta `frontend` y agregar las variables de entorno que serán enviadas al correo.  
3. Asegurarse de estar en la carpeta `frontend` y ejecutar el siguiente comando para iniciar la aplicación:
   ```bash
   npm run dev
   
