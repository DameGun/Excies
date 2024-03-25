import express from "express";
import cors from "cors";
import { connectDb } from "./config/connectDb.js";
import errorHandlerMiddleware from "./middleware/error.middleware.js";

import exercises from "./routes/exercise.router.js";
import muscles from "./routes/muscles.router.js";
import users from "./routes/user.router.js";
import exerciseLists from "./routes/exerciseList.router.js";
import sessions from './routes/session.router.js';

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/exercises", exercises);
app.use("/api/muscles", muscles);
app.use("/api/users", users);
app.use("/api/exercise-lists", exerciseLists);
app.use('/api/sessions', sessions);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server listening on the port ${PORT}...`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();