import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3006;

app.use(express.static('mudanzas-romeroj-app/dist/mudanzasrj-app'));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'mudanzas-romeroj-app/dist/mudanzasrj-app' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
