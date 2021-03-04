const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  const invalidCredentials = req.invalidCredentials;

  res.render("auth", {
    invalidCredentials: Boolean(invalidCredentials),
  });
});


module.exports = router;
