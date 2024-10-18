const express = require("express");
const sequelize = require("./config/database");
const jokeRoutes = require("./routes/jokeRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./swagger");
const cors = require("cors");

const app = express();

// Configuration fr CORS pour autoriser les requêtes de l'application React
const corsOptions = {
	origin: ["http://localhost:3000", "http://localhost:3001","https://volubyl01.github.io"],
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
const seedJokes = require("./seedJokes");
seedJokes().catch((err) => {
	console.error("Erreur lors du seeding:", err);
	process.exit(1); // Arrêtez le processus en cas d'erreur
});

// Routes de l'API
app.use("/api/v1/jokes", jokeRoutes);

// Documentation Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Synchronisation de la base de données
sequelize
	.sync()
	.then(() => console.log("Base de données synchronisée"))
	.catch((err) => console.error("Erreur de synchronisation:", err));

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
	console.error(err.stack);
	res
		.status(500)
		.json({ message: "Une erreur est survenue", error: err.message });
});

sequelize.sync().then(() => {
	console.log("Base de données synchronisée");
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
})
.catch(err => console.error('Erreur de synchronisation:', err));
