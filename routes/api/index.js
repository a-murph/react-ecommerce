const router = require("express").Router();
const productController = require("../../controllers/productController");
const productRoutes = require("./product.js");

router.use("/product", productRoutes);

router.route("/search")
	.get(productController.search);

module.exports = router;