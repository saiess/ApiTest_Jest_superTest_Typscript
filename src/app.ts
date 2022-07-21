import express from 'express';
import UserRoutes from './api/routes/User.routes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// ** routes //
app.use('/user', UserRoutes);


export default app;
