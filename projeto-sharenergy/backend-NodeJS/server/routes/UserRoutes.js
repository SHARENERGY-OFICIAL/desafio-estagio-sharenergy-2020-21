const userController = require("../controllers/userController");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.redirect("/login");
  });
  app.get("/listarUsuarios", userController.listarUsuarios);
  app.post("/login", userController.login);
  app.post("/novoUsuario", userController.novoUsuario);
  app.post("/logout", userController.logout);
};
