const db = require("../models");

module.exports = {
	search: function (req, res) {
		s = req.query.s;

		db.Product
			.find({ "name": { "$regex": s, "$options": "i" } })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	getProduct: function (req, res) {
		id = req.params.id;
		console.log(id);

		db.Product
			.findById(id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};