import exerciseListItemService from "../services/exerciseListItem.service.js";
import ResponseObject from "../utilities/responseObject.js";

async function findAll(req, res, next) {
  const list_id = req.params.list_id;

  try {
    const data = await exerciseListItemService.findAll(list_id);
    res.status(200).json(new ResponseObject({ success: true, data: data }));
  } catch (err) {
    next(err);
  }
}

async function findByPk(req, res, next) {
  const item_id = req.params.item_id;

  try {
    const data = await exerciseListItemService.findByPk(item_id);
    res.status(200).json(new ResponseObject({ success: true, data: data }));
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const list_id = req.params.list_id;
  const reqItem = req.body;

  try {
    const data = await exerciseListItemService.create(list_id, reqItem);
    res.status(201).json(new ResponseObject({ success: true, data: data }));
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const item_id = req.params.item_id;
  const reqItem = req.body;

  try {
    const data = await exerciseListItemService.update(item_id, reqItem);
    res.status(200).json(new ResponseObject({ success: true, data: data }));
  } catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  const item_id = req.params.item_id;

  try {
    await exerciseListItemService.destroy(item_id);
    res.status(200).json(new ResponseObject({ success: true }));
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
