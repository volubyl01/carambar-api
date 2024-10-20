const express = require("express");
const sequelize = require("./config/database");
const jokeRoutes = require("./routes/jokeRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./swagger");
const cors = require("cors");
const seedJokes = require("./seedJokes");

// Initialisation de l'app
const app = express();

// Configuration CORS pour autoriser les requêtes de l'application React
const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3001", "https://volubyl01.github.io/carambar-page"],
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes de l'API
app.use("/api/v1/jokes", jokeRoutes);

// Documentation Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Une erreur est survenue", error: err.message });
});

// Synchronisation de la base de données et démarrage du serveur
sequelize.sync()
    .then(async () => {
        console.log("Base de données synchronisée");
        
        try {
            await seedJokes();
            console.log("Seeding des blagues effectué avec succès");
        } catch (err) {
            console.error("Erreur lors du seeding:", err);
        }

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
    })
    .catch(err => {
        console.error('Erreur de synchronisation ou de seeding:', err);
        process.exit(1);
    });
