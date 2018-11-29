const db = require("../models");

module.exports = {
	search: function (req, res) {
		let s = req.query.s;
		let c = req.query.c;
		let sub = (req.query.sub === "true")

		let query = {
			"name": {
				"$regex": s,
				"$options": "i"
			}
		};

		if (c !== "All") {
			if (sub) {
				query = {
					$and: [
						{
							"name": {
								"$regex": s,
								"$options": "i"
							}
						},
						{
							"subcategory": {
								"$regex": c,
								"$options": "i"
							}
						},
					]
				}
			} else {
				query = {
					$and: [
						{
							"name": {
								"$regex": s,
								"$options": "i"
							}
						},
						{
							"category": {
								"$regex": c,
								"$options": "i"
							}
						},
					]
				}
			}
		}

		db.Product
			.find(query)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	getProduct: function (req, res) {
		id = req.params.id;

		db.Product
			.findById(id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(404).json(err));
	},
	postComment: function (req, res) {
		id = req.params.id;

		db.Product
			.update({ _id: id }, { $push: { reviews: req.body } })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(500).json(err));
	}
};