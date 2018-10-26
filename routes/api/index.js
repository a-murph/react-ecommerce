const router = require("express").Router();
const productController = require("../../controllers/productController");

// router.use("/list", listRoutes);

router.route("/search")
	.get(productController.search);

module.exports = router;