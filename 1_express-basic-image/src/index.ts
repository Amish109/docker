import express from 'express';
import { ENV_VARIABLES } from './config/env.js';
import { api_router } from './routers/index.js';
import cors from 'cors';

const app = express();

const {PORT} = ENV_VARIABLES; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.get('/', (req,res)=>{
    return res.send('Welcome to Express Image Processing API');
});

app.use('/api', api_router);

app.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting the server:', error);
        return;
    }
    console.log(`Server is running on port ${PORT}`);
});