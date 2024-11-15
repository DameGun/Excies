import { DataTypes } from "sequelize";
import { db } from "../config/connectDb.js";
import Exercise from "./exercise.model.js";

const ExerciseTranslated = db.define(
  "exercise_translations",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    exercise_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "exercise_translations",
    timestamps: false,
  }
);

ExerciseTranslated.belongsTo(Exercise, {
  foreignKey: "exercise_id",
});

Exercise.hasMany(ExerciseTranslated, {
  foreignKey: "exercise_id",
});

export default ExerciseTranslated;
