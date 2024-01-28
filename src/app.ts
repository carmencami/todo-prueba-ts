import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import path from 'path'; // Asegúrate de importar la biblioteca 'path'

import todoListRoutes from './routes/todolistroutes';

const app = express();

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(todoListRoutes);

// Manejo de rutas desconocidas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'ruta-al-html-principal-de-react', 'index.html'));
});

export default app;
