import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routers from './app/routes';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1/', routers);

export default app;
