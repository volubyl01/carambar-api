const Joke = require("../models/Joke");
const { sequelize } = require("../config/database");

exports.addJoke = async (req, res) => {
	try {
		const { setup, punchline } = req.body;
		if (!setup || !punchline) {
			return res.status(400).json({ error: "Setup et punchline sont requis" });
		}
		const joke = await Joke.create({ setup, punchline });
		res.status(201).json(joke);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.getAllJokes = async (req, res) => {
	try {
		const jokes = await Joke.findAll();
		res.json(jokes);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getJokeById = async (req, res) => {
	try {
		const joke = await Joke.findByPk(req.params.id);
		if (joke) {
			res.json(joke);
		} else {
			res.status(404).json({ message: "Blague non trouvée" });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getRandomJoke = async (req, res) => {
	try {
		const joke = await Joke.findOne({ order: sequelize.random() });
		if (joke) {
			// renvoie du json
			res.setHeader('Content-Type', 'application/json');
			res.json(joke);
		} else {
			res.status(404).json({ message: "Aucune blague trouvée" });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
