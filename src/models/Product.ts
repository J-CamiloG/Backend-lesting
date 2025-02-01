import { Schema, model } from 'mongoose';

// Definir el esquema del producto
const productSchema = new Schema({
  name: {
    type: String,
    required: true, // El nombre es obligatorio
  },
  price: {
    type: Number,
    required: true, // El precio es obligatorio
  },
  description: {
    type: String,
    required: false, // La descripción es opcional
  },
  createdAt: {
    type: Date,
    default: Date.now, // Fecha de creación automática
  },
});

// Crear y exportar el modelo
export default model('Product', productSchema);