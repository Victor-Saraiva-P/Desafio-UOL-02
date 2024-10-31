import swaggerJSDoc from 'swagger-jsdoc';

const port = process.env.PORT || 3000;

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Physical Store API',
    version: '3.0.1',
    description: 'API para localizar lojas físicas a partir de um CEP',
  },
  servers: [
    {
      url: `http://localhost:${port}/api`,
      description: 'Servidor local de Desenvolvimento',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Caminho para os arquivos da API
  apis: ['./src/routes/*.ts', './src/models/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec
