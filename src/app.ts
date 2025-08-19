import express from 'express';
import 'dotenv/config'; // 需要提早引入，後續的檔案才可以正常使用到 dotenv
import indexRoute from './routes';
import guestbookRoute from './routes/guestbookRoute';

const app = express();

const PORT = 3000;

app.use('/', indexRoute);
app.use('/guestbook', guestbookRoute);

app.listen(PORT);
