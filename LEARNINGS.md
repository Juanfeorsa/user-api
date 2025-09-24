## 🏗️ Patrón de diseño aplicado

Se implementó una **Arquitectura en Capas (Layered Architecture)**:

- **Rutas (`routes/`)** → gestionan los endpoints de la API.  
- **Controladores (`controllers/`)** → contienen la lógica de negocio.  
- **Modelos (`models/`)** → definen los esquemas y reglas de los datos en MongoDB.  
- **Configuración (`config/`)** → centraliza la conexión a MongoDB y otras configuraciones.  

### Beneficios
- Código más organizado y fácil de mantener.
- Escalable para agregar nuevas entidades.
- Reutilizable: los controladores no dependen de cómo se configuran las rutas ni los modelos.
