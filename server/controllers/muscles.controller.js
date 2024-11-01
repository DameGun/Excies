import musclesService from "../services/muscles.service.js";

async function findAll(req, res, next) {
  try {
    const data = await musclesService.findAll();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

async function findByPk(req, res, next) {
  const id = req.params.id;

  try {
    const data = await musclesService.findByPk(id);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const reqMuscles = req.body;

  try {
    const data = await musclesService.create(reqMuscles);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const id = req.params.id;
  const reqMuscles = req.body;

  try {
    const data = await musclesService.update(id, reqMuscles);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  const id = req.params.id;

  try {
    await musclesService.destroy(id);
    res.status(200).json();
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
