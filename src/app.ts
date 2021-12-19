import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 9001;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});