import express from 'express';
import { ENV_VARIABLES } from './config/env.js';
import { api_router } from './routers/index.js';
import { initDB } from './config/db.js';
import cors from 'cors';

const app = express();

const { PORT } = ENV_VARIABLES;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.get('/', (_req, res) => {
  return res.send('Welcome to Express CRUD API');
});

app.use('/api', api_router);

const startServer = async () => {
  try {
    await initDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
