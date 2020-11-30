const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const path = require("path");

const cors = require("cors");

module.exports = () => {
  const app = express();

  app.use(cors());

  app.set("port", process.env.PORT || 3100);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  consign({ cwd: "server" })
    .include("models")
    .include("controllers")
    .then("routes")

    .into(app);

  return app;
};
