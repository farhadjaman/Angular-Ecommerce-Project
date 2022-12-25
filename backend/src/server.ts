import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

app.use(express.static('public'));
app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Website served on http://localhost:' + port);
});
