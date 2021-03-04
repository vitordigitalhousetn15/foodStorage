const express = require("express");
const middleware = require("../middlewares/auth");
const model = require("../models/auth");
const router = express.Router();

router.get("/", function (req, res) {
  const invalidCredentials = req.invalidCredentials;

  res.render("auth", {
    invalidCredentials: Boolean(invalidCredentials),
  });
});

router.post("/", middleware.validateCredentials, function (req, res) {
  const credentials = req.body;
  const user = model.authenticateUser(credentials.login, credentials.password);

  if (user === undefined) {
    return res.render("auth", { invalidCredentials: true });
  }

  req.session.user = user;
  res.redirect("/products");
});

module.exports = router;
