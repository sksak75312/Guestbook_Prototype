import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (_, req) => {
  req.json({
    name: 'Express Response',
  });
});

app.listen(PORT);
