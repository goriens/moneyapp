const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const crudController = require("./crud.controller");

router.get("", crudController(Product).get);
router.post("", crudController(Product).post);
router.get("/:id", crudController(Product).getById);
router.patch("/:id", crudController(Product).patch);
router.delete("/:id", crudController(Product).deleteOne);

module.exports = router;
