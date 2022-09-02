const express = require("express");
const Review = require("../models/review.model");
const router = express.Router();
const crudController = require("./crud.controller");

router.get("", crudController(Review).get);
router.post("", crudController(Review).post);
router.get("/:id", crudController(Review).getById);
router.patch("/:id", crudController(Review).patch);
router.delete("/:id", crudController(Review).deleteOne);

module.exports = router;
