import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import path from 'path';

import routes from './routes';


const app = express();
app.use(morgan('dev'));

app.use('/api', routes);
app.use('/', express.static(path.resolve(__dirname, '../dist')));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).send(err.message);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is listening on port ${port}.`));
