import userService from "../services/user.service.js";
import CredentialsInUseError from "../utilities/errors/credentialsInUseError.js";
import WrongCredentialsError from "../utilities/errors/wrongCredentialsError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function register(user) {
  const checkUsername = await userService.findByUsername(user.username);

  if (checkUsername !== null) {
    throw new CredentialsInUseError("Username");
  }

  if (user.email) {
    const checkEmail = await userService.findByEmail(user.email);

    if (checkEmail !== null) {
      throw new CredentialsInUseError("Email");
    }
  }

  const entity = await userService.create(user);
  return entity;
}

async function login(username, password) {
  const entity = await userService.findByUsername(username);

  if (entity === null) {
    throw new WrongCredentialsError();
  }

  const validCredentials = await bcrypt.compare(password, entity.password);

  if (!validCredentials) {
    throw new WrongCredentialsError();
  }

  return entity;
}

async function createJwt(user) {
  return jwt.sign(
    {
      username: user.username,
      user_id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
}

export default {
  register,
  login,
  createJwt
};
