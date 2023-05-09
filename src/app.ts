import express, { Application, Response, Request } from 'express';

const app: Application = express();
const PORT = 3001;

app.use('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
});
