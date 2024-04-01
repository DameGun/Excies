import DetailedExerciseListItem from "../models/detailedExerciseListItem.model.js";
import NotFoundError from "../utilities/errors/notFoundError.js";
import exerciseListItemService from "./exerciseListItem.service.js";

async function findAll(list_item_id) {
  const entity = await exerciseListItemService.findByPk(
    list_item_id,
    DetailedExerciseListItem
  );
  return entity.detailed_exercise_list_items;
}

async function findByPk(id) {
  const entity = await DetailedExerciseListItem.findByPk(id);

  if (entity === null) {
    throw new NotFoundError("detailedExerciseListItem", id);
  }

  return entity;
}

async function create(list_item_id, data) {
  data.list_item_id = list_item_id;
  return await DetailedExerciseListItem.create(data);
}

async function update(id, data) {
  const entity = await DetailedExerciseListItem.findByPk(id);

  if (entity === null) {
    throw new NotFoundError("detailedExerciseListItem", id);
  }

  await entity.set(data);
  return await entity.save();
}

async function destroy(id) {
  const entity = await DetailedExerciseListItem.findByPk(id);

  if (entity === null) {
    throw new NotFoundError("detailedExerciseListItem", id);
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
