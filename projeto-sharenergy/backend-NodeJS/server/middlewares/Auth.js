const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: "Nenhum token fornecido." });

  jwt.verify(token, "secret", (err, decoded) => {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Falha ao autenticar o token." });

    req.userId = decoded.id;
    next();
  });
};
