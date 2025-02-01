import { Request, Response } from 'express';
import Product from '../models/Product';

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, price, description } = req.body;

  try {
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error creando el producto', error: err });
  }
};

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error obteniendo los productos', error: err });
  }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error obteniendo el producto', error: err });
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description },
      { new: true }
    );
    if (!updatedProduct) {
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error actualizando el producto', error: err });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ message: 'Error eliminando el producto', error: err });
  }
};