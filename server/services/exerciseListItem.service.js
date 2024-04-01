import ExerciseListItem from "../models/exerciseListItem.model.js";
import NotFoundError from "../utilities/errors/notFoundError.js";
import exerciseListService from "./exerciseList.service.js";

async function findAll(list_id) {
  const entity = await exerciseListService.findByPk(list_id, ExerciseListItem);
  return entity.exercise_list_items;
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
