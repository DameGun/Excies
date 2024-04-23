import { Sequelize } from "sequelize";
import Exercise from "../models/exercise.model.js";
import ExerciseListItem from "../models/exerciseListItem.model.js";
import DetailedExerciseListItem from '../models/detailedExerciseListItem.model.js';
import NotFoundError from "../utilities/errors/notFoundError.js";

async function findAll(list_id) {
  const subQuery = Sequelize.literal(`(
    SELECT MIN(date)
    FROM detailed_exercise_list_item
    WHERE 
      detailed_exercise_list_item.list_item_id = exercise_list_item.id
  )`);

  const entity = await ExerciseListItem.findAll({
    where: {
      list_id: list_id
    },
    include: [
      {
        model: Exercise,
        attributes: []
      },
      {
        model: DetailedExerciseListItem,
        attributes: []
      }
    ],
    attributes: {
      include: [
        [Sequelize.col('exercise.name'), 'name'],
        [Sequelize.fn('AGE', Sequelize.literal('CURRENT_DATE'), subQuery), 'last_time_updated'],
      ]
    },
  });

  return entity;
}

async function findByPk(id, withInclude) {
  const entity = await ExerciseListItem.findByPk(id, {
    include: withInclude,
  });

  if (entity === null) {
    throw new NotFoundError("exerciseListItem", id);
  }

  return entity;
}

async function create(list_id, data) {
  data.list_id = list_id;
  return await ExerciseListItem.create(data);
}

async function update(id, data) {
  const entity = await ExerciseListItem.findByPk(id);

  if (entity === null) {
    throw new NotFoundError("exerciseListItem", id);
  }

  await entity.set(data);
  return await entity.save();
}

async function destroy(id) {
  const entity = await ExerciseListItem.findByPk(id);

  if (entity === null) {
    throw new NotFoundError("exerciseListItem", id);
  }

  return await entity.destroy();
}

export default {
  findAll,
  findByPk,
  create,
  update,
  destroy,
};
