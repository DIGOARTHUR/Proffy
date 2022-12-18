import express from 'express'
import routes from './routes';
import cors from 'cors'
const app = express();
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json'
app.use(cors());
app.use(express.json()); // Possibilita o express reconhecer o JSON.

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(routes)


//localhost:3333
app.listen(3333);
