const db = require("../models");

module.exports = {
	search: function (req, res) {
		let s = req.query.s;
		let c = req.query.c;

		let query = {
			"name": {
				"$regex": s,
				"$options": "i"
			}
		};

		console.log(c);
		if (c !== "All") {
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

		db.Product
			.find(query)
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

/*
let c = req.query.c;
		let query = {};

		console.log(c);

		if (c === "All") {
			query = {
				"$name": { "$regex": s, "$options": "i" }
			};
		} else {
			query = {
				"$and": [
					{
						"$name": { "$regex": s, "$options": "i" }
					},
					{
						"$category": { "$regex": c, "$options": "i" }
					},
				]
			};
		}

		console.log(query)

		db.Product
			.find(query)
*/