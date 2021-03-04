const express = require("express");
const router = express.Router();
const productsModel = require("../models/products");
const middleware = require("../middlewares/products");
const authMiddleware = require("../middlewares/auth");

// GET - /products
router.get("/", authMiddleware.validateRole("manager"), function (req, res) {
  const productsData = productsModel.getProducts();

  res.render("products", {
    title: "Pagina de produtos",
    productsData: productsData,
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
