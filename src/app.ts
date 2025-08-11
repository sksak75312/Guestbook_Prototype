import express from 'express';
import indexRoute from './routes';
import guestbookRoute from './routes/guestbookRoute';

const app = express();

const PORT = 3000;

app.use('/', indexRoute);
app.use('/guestbook', guestbookRoute);

app.listen(PORT);
