import express from 'express'
import routes from './routes';
import cors from 'cors'
const app = express();


app.use(cors());
app.use(express.json()); // Possibilita o express reconhecer o JSON.

app.use(routes)


//localhost:3333
app.listen(3333);
