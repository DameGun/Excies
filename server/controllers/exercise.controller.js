import exerciseService from '../services/exercise.service.js';

async function findAll(req, res, next) {
  try {
    const data = await exerciseService.findAll();
    res.status(200).json(data);
  }
  catch (err) {
    next(err);
  }
}

async function findByPk(req, res, next) {
  const id = req.params.id;

  try {
    const data = await exerciseService.findByPk(id);
    res.status(200).json(data);
  }
  catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const reqExercise = req.body;
  
  try {
    const data = await exerciseService.create(reqExercise);
    res.status(401).json(data);
  }
  catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const id = req.params.id;
  const reqExercise = req.body;

  try {
    const data = await exerciseService.update(id, reqExercise);
    res.status(200).json(data);
  }
  catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  const id = req.params.id;

  try {
    const data = await exerciseService.destroy(id);
    res.status(200).json(data);
  }
  catch (err) {
    next(err);
  }
}

export default {
  findAll,
  findByPk,
  create,
  update,
  destroy
}