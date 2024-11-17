import User from "../models/user.model.js";
import NotFoundError from "../utilities/errors/notFoundError.js";
import bcrypt from "bcrypt";

async function findAll() {
  return await User.findAll();
}

async function findOne(username, withInclude) {
  const entity = await User.findOne({
    where: {
      username: username,
    },
    include: withInclude,
  });

  if (entity === null) {
    throw new NotFoundError("user", username);
  }

  return entity;
}

async function findByEmail(email) {
  return await User.findOne({
    where: {
      email: email,
    },
  });
}

async function findByUsername(username) {
  return await User.findOne({
    where: {
      username: username,
    },
  });
}

async function create(data) {
  const entity = await User.create({
    ...data,
    role_id: 2,
    password: await bcrypt.hash(data.password, 10),
  });
  return entity;
}

async function update(username, data) {
  const entity = await findByUsername(username);

  if (entity === null) {
    throw new NotFoundError("user", username);
  }

  await entity.set(data);
  return await entity.save();
}

export default {
  findAll,
  findOne,
  create,
  findByEmail,
  findByUsername,
  update,
};
