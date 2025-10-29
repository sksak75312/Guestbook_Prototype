import express from 'express';
// 需要提早引入，後續的檔案才可以正常使用到 dotenv
import 'dotenv/config';
import cors from 'cors';
import indexRoute from './routes';
import guestbookRoute from './routes/guestbook.route';
import commentsRoute from './routes/comments.route';

import errorHandler from './middlewares/errorHandler';

const app = express();

const PORT = process.env.PORT || 3000;

// 需要增加這一段解析 JSON 格式，post 才可取用到 req.body 資料
app.use(express.json());
app.use(cors());

app.use('/', indexRoute);
app.use('/guestbook', guestbookRoute);
app.use('/comments', commentsRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('伺服器已經啟動');
});
