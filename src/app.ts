import express from 'express';
import indexRoute from './routes';

const app = express();

const PORT = 3000;

app.use('/', indexRoute);

app.listen(PORT);
