const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
const crudController = require("./crud.controller");

router.get("", crudController(User).get);
router.post("", crudController(User).post);
router.get("/:id", crudController(User).getById);
router.patch("/:id", crudController(User).patch);
router.delete("/:id", crudController(User).deleteOne);

module.exports = router;
