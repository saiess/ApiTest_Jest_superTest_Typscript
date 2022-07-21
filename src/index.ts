import './database';
import app from './app';
import cors from 'cors';

require('dotenv').config();

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log('server is running on port', process.env.PORT);
});