const express = require("express");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const reviewController = require("./controllers/review.controller");
const connect = require("./configs//db");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/user", userController);
app.use("/product", productController);
app.use("/review", reviewController);

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.log("error", err);
  }
  console.log(`Listening on port ${PORT}`);
});
