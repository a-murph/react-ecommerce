const router = require("express").Router();
const productController = require("../../controllers/productController");

router.route("/:id")
	.get(productController.getProduct)
	.post(productController.postComment);

module.exports = router;