import express from "express";
import cors from "cors";
import { connectDb } from "./config/connectDb.js";
import errorHandlerMiddleware from "./middleware/error.middleware.js";

import exercises from "./routes/exercise.router.js";
import muscles from "./routes/muscles.router.js";
import users from "./routes/user.router.js";
import exerciseLists from "./routes/exerciseList.router.js";
import sessions from "./routes/session.router.js";
import exerciseListItems from "./routes/exerciseListItem.router.js";
import detailedExerciseListItems from "./routes/detailedExerciseListItem.router.js";
import auth from "./routes/auth.router.js";
import verifyToken from "./middleware/auth.middleware.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", auth);
app.use("/api/exercises", exercises);
app.use("/api/muscles", muscles);
app.use("/api", verifyToken, users);
app.use("/api/:username/exercise-lists", verifyToken, exerciseLists);
app.use("/api/:username/sessions", verifyToken, sessions);
app.use(
  "/api/:username/exercise-lists/:list_id/items",
  verifyToken,
  exerciseListItems
);
app.use(
  "/api/:username/exercise-lists/:list_id/items/:item_id/details",
  verifyToken,
  detailedExerciseListItems
);

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
