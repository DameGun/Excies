import ExerciseTranslated from "../models/exerciseTranslated.model.js";
import NotFoundError from "../utilities/errors/notFoundError.js";

async function findAll(language) {
  const entities = await ExerciseTranslated.findAll({
    where: {
      language,
    },
    order: [["name", "ASC"]],
    attributes: ["id", "name", "exercise_id"],
  });

  return {
    language,
    data: entities,
  };
}

async function findDetailsByPk(id) {
  const entity = await ExerciseTranslated.findByPk(id, {
    attributes: ["description"],
  });

  if (entity === null) {
    throw new NotFoundError("ExerciseTranslated", id);
  }

  return entity;
}

export default {
  findAll,
  findDetailsByPk,
};
