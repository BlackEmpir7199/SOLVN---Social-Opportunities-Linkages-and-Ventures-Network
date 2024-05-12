import express from 'express';
import cors from "cors"
import { configDotenv } from 'dotenv';
import router from './routes/routes.mjs';
import { logger } from './middlewares/logger.mjs';

configDotenv();

const app = express();

app.use(cors())
app.use(express.json());

app.use(logger);

app.use('/api/v1', router);

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Running on ${process.env.HOSTURL}:${process.env.PORT}`);
})