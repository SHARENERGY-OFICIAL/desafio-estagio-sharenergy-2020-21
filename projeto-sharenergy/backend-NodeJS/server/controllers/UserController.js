const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const modelUser = mongoose.model("User");

let userController = {};

userController.listarUsuarios = (req, res) => {
  modelUser
    .find()
    .then((results) => res.json(results))
    .catch((err) => res.send(err));
};

userController.login = (req, res) => {
  if (req !== null) {
    modelUser
      .find({
        email: req.body.email,
      })
      .then((user) => {
        if (user) {
          const usuario = user[0];
          const hash = usuario.password;

          bcrypt.compare(req.body.password, hash, function (err, result) {
            if (result) {
              const id = usuario._id;
              const token = jwt.sign({ id }, "secret", {
                expiresIn: 300, // expires in 5min
              });
              console.log("Usuario logado com Sucesso!");
              console.log(result);
              return res.json({
                success: true,
                message: "Usuario logado com sucesso!",
                statusCode: 201,
                auth: true,
                token: token,
              });
            } else {
              console.log("Senha incorreta!");
              console.log(result);
              return res.json({
                success: false,
                message: "Senha incorreta!",
                statusCode: 600,
              });
            }
          });
        }
      })
      .catch((err) => {
        console.log("O usuario nao foi encontrado!");
        res.json({
          success: false,
          message: "O usuario nao foi encontrado!",
          statusCode: 700,
        });
      });
  } else {
    return res.json({
      success: false,
      message: "Usuario inexistente!",
      statusCode: 500,
    });
  }
};

userController.novoUsuario = (req, res) => {
  if (req.body.email && req.body.password) {
    if (req.body.password2 && req.body.password == req.body.password2) {
      modelUser.findOne({ email: req.body.email }).then((user) => {
        if (user) {
          res.json({
            success: false,
            message: "Este email nao está disponivel!",
          });
        } else {
          bcrypt
            .hash(req.body.password, 10)
            .then((hash) => {
              let encryptedPassword = hash;

              let newUser = new modelUser({
                name: req.body.name,
                password: encryptedPassword,
                email: req.body.email,
                isAdmin: req.body.isAdmin,
              });

              newUser
                .save()
                .then(() =>
                  res.json({
                    success: true,
                    message: "Usuario criado com sucesso!",
                    statusCode: 201,
                  })
                )
                .catch((err) =>
                  res.json({ success: false, message: err, statusCode: 500 })
                );
            })

            .catch((err) =>
              res.json({ success: false, message: err, statusCode: 500 })
            );
        }
      });
    } else {
      res.json({
        success: false,
        message: "As senhas não se correspondem!",
        statusCode: 400,
      });
    }
  } else {
    res.json({
      success: false,
      message: "Os campos de e-mail e senha sao obrigatorios!",
      statusCode: 400,
    });
  }
};

userController.logout = (req, res) => {
  res.json({ auth: false, token: null });
  console.log("Fim da conexao");
};

module.exports = userController;
