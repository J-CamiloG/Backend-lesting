import { Request, Response } from 'express';
import User from '../models/User'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password, role } = req.body;

    try {

        if (!name || !email || !password) {
            res.status(400).json({ message: 'Todos los campos son obligatorios' });
            return;
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'El correo electrónico ya está en uso' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: 'Error registrando usuario', error: err.message });
        } else {
            res.status(500).json({ message: 'Error registrando usuario', error: 'Error desconocido' });
        }
    }
};


export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            res.status(400).json({ message: 'Todos los campos son obligatorios' });
            return;
        }

        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: 'Correo electrónico no encontrado' });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({ message: 'Contraseña incorrecta' });
            return;
        }

        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            token,
            name: user.name,
            role: user.role
        });
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: 'Error en el login', error: err.message });
        } else {
            res.status(500).json({ message: 'Error en el login', error: 'Error desconocido' });
        }
    }
};