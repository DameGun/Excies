import userService from "../services/user.service.js";

async function findAll(req, res, next) {
  try {
    const data = await userService.findAll();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

async function findOne(req, res, next) {
  const reqUsername = req.params.username;

  try {
    const data = await userService.findOne(reqUsername);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const reqUser = req.body;

  try {
    const data = await userService.create(reqUser);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
}

export default {
  findAll,
  findOne,
  create,
};
