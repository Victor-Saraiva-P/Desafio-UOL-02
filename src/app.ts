import express from 'express';
import lojaRoutes from './routes/lojaRoutes';

// Inicializar o Express
const app = express();

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Rotas
app.use('/api/lojas', lojaRoutes);

// Exportar a aplicação configurada
export default app;
