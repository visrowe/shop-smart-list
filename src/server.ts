import * as express from 'express';
import { Router, Request, Response } from 'express';

const router: Router = Router();
const app: express.Application = express();
const port: number = normalizePort(process.env.PORT || 3000);

router.get('/', (req: Request, res: Response) => {
    res.send('Hell1o, World!');
});

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;
    res.send(`Hello test, ${name}`);
});

app.use(router);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;
    if (port >= 0) return port;
    return false;
}