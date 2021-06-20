const express = require("express");
const router = express.Router();
const productsModel = require("../models/products");
const middleware = require("../middlewares/products");
const authMiddleware = require("../middlewares/auth");

// GET - /products
router.get("/", authMiddleware.validateRole("manager"), function (req, res) {
  const productsData = productsModel.getProducts();
  let hasSession = false;
  if (req.session !== undefined && req.session.user !== undefined) {
    hasSession = true;
  }

  res.render("products", {
    title: "Pagina de produtos",
    productsData: productsData,
    hasSession,
  });
});

router.post(
  "/",
  middleware.log,
  middleware.validateBody,
  authMiddleware.validateRole("admin"),
  function (req, res) {
    const newProduct = req.body;

    productsModel.insertProduct(newProduct);
    res.redirect("/products");
  }
);

module.exports = router;
