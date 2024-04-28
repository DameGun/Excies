import { Sequelize } from "sequelize";
import DetailedExerciseListItem from "../models/detailedExerciseListItem.model.js";
import NotFoundError from "../utilities/errors/notFoundError.js";

async function findAll(list_item_id) {
  const entity = await DetailedExerciseListItem.findAll({
    where: {
      list_item_id: list_item_id,
    },
    order: [
      ['date', 'ASC'],
      ['time', 'ASC']
    ],
    attributes: [
      'id',
      'list_item_id',
      'session_id',
      'date',
      'rep',
      'weight',
      'notes',
      [Sequelize.fn('TO_CHAR', Sequelize.col('time'), 'HH24:MI'), 'time']
    ],
    raw: true
  });

  const groupedData = entity.reduce((acc, item) => {
    const date = item.date;
    const index = acc.findIndex(item => item.title == date);

    if(index == -1) {
        acc.push({ title: date, data: [] })
    }

    acc[acc.length - 1].data.push(item);

    return acc;
  }, []);
  
  return groupedData;
}

async function findByPk(id) {
  const entity = await DetailedExerciseListItem.findOne({
    where: {
      'id': id
    },
    attributes: [
      'id',
      'list_item_id',
      'session_id',
      'date',
      'rep',
      'weight',
      'notes',
      [Sequelize.fn('TO_CHAR', Sequelize.col('time'), 'HH24:MI'), 'time']
    ],
  });

  if (entity === null) {
    throw new NotFoundError("detailedExerciseListItem", id);
  }

  return entity;
}

async function create(list_item_id, data) {
  data.list_item_id = list_item_id;
  data.time = new Date(data.time).toLocaleTimeString()
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
