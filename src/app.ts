import express from 'express';
import 'dotenv/config'; // 需要提早引入，後續的檔案才可以正常使用到 dotenv
import indexRoute from './routes';
import guestbookRoute from './routes/guestbookRoute';

const app = express();

const PORT = process.env.PORT || 3000;

// 需要增加這一段解析 JSON 格式，post 才可取用到 req.body 資料
app.use(express.json());

app.use('/', indexRoute);
app.use('/guestbook', guestbookRoute);

app.listen(PORT);
