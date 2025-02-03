import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Productos y Autenticación',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar productos y autenticación',
    },
    servers: [
      {
        url: 'http://localhost:5001',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], 
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};