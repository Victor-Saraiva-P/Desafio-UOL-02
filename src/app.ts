import express from 'express';

// Inicializar o Express
const app = express();

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Exportar a aplicação configurada
export default app;
