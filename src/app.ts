import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes'; // Importar rutas de productos
import { setupSwagger } from './swagger'; // Importar configuración de Swagger

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI as string;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error conectando a MongoDB:', err));

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes); // Rutas de autenticación
app.use('/api', productRoutes);   // Rutas de productos

// Configurar Swagger
setupSwagger(app);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Backend funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});