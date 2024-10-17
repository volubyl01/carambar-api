const express = require('express');
// on installe cors
const cors = require('cors');
const sequelize = require('./config/database');
const jokeRoutes = require('./routes/jokeRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');


// Configuration fr CORS pour autoriser les requêtes de l'application React
const corsOptions = {
  origin: [
  'http://localhost:3000', 
  'https://volubyl01.github.io'],
  optionsSuccessStatus: 200,
};

const seedJokes = require('./seedJokes');
seedJokes()
  .catch(err => {
    console.error('Erreur lors du seeding:', err);
    process.exit(1); // Arrêtez le processus en cas d'erreur
  });


const app = express();
// Ajoutez cette ligne pour utiliser le middleware CORS
app.use(cors(corsOptions))
app.use(express.json());

// Routes de l'API
app.use('/api/v1/jokes', jokeRoutes);

// Documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Synchronisation de la base de données
sequelize.sync()
  .then(() => console.log('Base de données synchronisée'))
  .catch(err => console.error('Erreur de synchronisation:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
