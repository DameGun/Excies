import exerciseListItemService from "../services/exerciseListItem.service.js";

async function findAll(req, res, next) {
  const list_id = req.params.list_id;
  const language = req.query.language;

  try {
    const data = await exerciseListItemService.findAll(list_id, language);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

async function findByPk(req, res, next) {
  const item_id = req.params.item_id;
  const language = req.query.language;

  try {
    const data = await exerciseListItemService.findByPk(item_id, language);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const list_id = req.params.list_id;
  const reqItem = req.body;

  try {
    const data = await exerciseListItemService.create(list_id, reqItem);
    const response = await exerciseListItemService.findByPk(data.id);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const item_id = req.params.item_id;
  const reqItem = req.body;

  try {
    const data = await exerciseListItemService.update(item_id, reqItem);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  const item_id = req.params.item_id;

  try {
    await exerciseListItemService.destroy(item_id);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}

export default {
  findAll,
  findByPk,
  create,
  update,
  destroy,
};
