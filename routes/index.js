const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let hasSession = false;
  res.render("index", { title: 'Express', hasSession: hasSession });
});

module.exports = router;
