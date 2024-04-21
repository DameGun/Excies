import authService from "../services/auth.service.js";
import ResponseObject from "../utilities/responseObject.js";

async function register(req, res, next) {
  const userData = req.body;

  try {
    const data = await authService.register(userData);
    const jwt = await authService.createJwt(data);

    res.status(201).json(
      new ResponseObject({
        success: true,
        data: {
          accessToken: jwt,
          user_id: data.id,
          username: data.username
        },
      })
    );
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  const { username, password } = req.body;

  try {
    const data = await authService.login(username, password);
    const jwt = await authService.createJwt(data);

    res.status(200).json(
      new ResponseObject({
        success: true,
        data: {
          accessToken: jwt,
          user_id: data.id,
          username: data.username
        },
      })
    );
  } catch (err) {
    next(err);
  }
}

export default {
  register,
  login,
};
