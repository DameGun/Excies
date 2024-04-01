import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null)
      return res.status(401).json({
        message: "Unauthorized",
      });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const username = req.params.username;

    if (username) {
      if (username !== decoded.username) {
        return res.status(404).json({
          message: "Not found",
        });
      }
    }

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Authentication failed",
    });
  }
}

export default authMiddleware;
