const router = require("express").Router();
const productController = require("../../controllers/productController");

router.route("/:id")
	.get(productController.getProduct);

module.exports = router;