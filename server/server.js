import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';
import errorHandlerMiddleware from './middleware/error.middleware.js';

import exercises from './routes/exercise.router.js';
import muscles from './routes/muscles.router.js';
import users from './routes/user.router.js';

const app = express();

let corsOptions = { 
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/exercises', exercises);
app.use('/api/muscles', muscles);
app.use('/api/users', users);


app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 8000;
const start = async() => {
    try {
        await connectDb();
        app.listen(PORT, () => {
            console.log(`Server listening on the port ${PORT}...`);
        })
    }
    catch (error) {
        console.log(error);
    }
}

start();
