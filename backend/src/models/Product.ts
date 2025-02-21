import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true, 
  },
  description: {
    type: String,
    required: false, 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});

export default model('Product', productSchema);