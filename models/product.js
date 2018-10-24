const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
	name: { type: String, required: true },
	brand: { type: String },
	price: { type: Number, required: true },
	image: { type: String },
	category: { type: String, required: true },
	description: { type: String },
	reviews: { type: Array },
	rating: { type: Number, default: 0 },
	createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;