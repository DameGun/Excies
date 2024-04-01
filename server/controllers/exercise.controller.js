import exerciseService from "../services/exercise.service.js";
import ResponseObject from "../utilities/responseObject.js";

async function findAll(req, res, next) {
  try {
    const data = await exerciseService.findAll();
    res.status(200).json(new ResponseObject({ success: true, data: data }));
  } catch (err) {
    next(err);
  }
}

async function findByPk(req, res, next) {
  const id = req.params.id;

  try {
    const data = await exerciseService.findByPk(id);
    res.status(200).json(new ResponseObject({ success: true, data: data }));
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const reqExercise = req.body;

  try {
    const data = await exerciseService.create(reqExercise);
    res.status(201).json(new ResponseObject({ success: true, data: data }));
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const id = req.params.id;
  const reqExercise = req.body;

  try {
    const data = await exerciseService.update(id, reqExercise);
    res.status(200).json(new ResponseObject({ success: true, data: data }));
  } catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  const id = req.params.id;

  try {
    await exerciseService.destroy(id);
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
