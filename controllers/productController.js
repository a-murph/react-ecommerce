const db = require("../models");

module.exports = {
	search: function (req, res) {
		console.log("in controller");
		s = req.query.s;

		db.Product
			.find({ "name": { "$regex": s, "$options": "i" } })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};