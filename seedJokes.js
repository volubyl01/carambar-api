const sequelize = require('./config/database');
const Joke = require('./models/Joke');

const jokes = [
  { setup: "Quelle est la femelle du hamster ?", punchline: "L'Amsterdam" },
  { setup: "Que dit un oignon quand il se cogne ?", punchline: "Aïe" },
  { setup: "Quel est l'animal le plus heureux ?", punchline: "Le hibou, parce que sa femme est chouette." },
  { setup: "Pourquoi le football c'est rigolo ?", punchline: "Parce que Thierry en rit" },
  { setup: "Quel est le sport le plus fruité ?", punchline: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
  { setup: "Que se fait un Schtroumpf quand il tombe ?", punchline: "Un Bleu" },
  { setup: "Quel est le comble pour un marin ?", punchline: "Avoir le nez qui coule" },
  { setup: "Qu'est ce que les enfants usent le plus à l'école ?", punchline: "Le professeur" },
  { setup: "Quel est le sport le plus silencieux ?", punchline: "Le para-chuuuut" },
  { setup: "Quel est le comble pour un joueur de bowling ?", punchline: "C'est de perdre la boule" }
];

//Méthode traditionnelle mais on choisit de synchroniser avec sequelize voir fichier Express
async function seedJokes() {
  // try {
  //   // Vérifiez si la table est vide avant d'insérer des données
  //   const count = await Joke.count();
  //   if (count === 0) {
  //     await Joke.bulkCreate(jokes);
  //     console.log('Blagues insérées avec succès');
  //   } else {
  //     console.log('La table des blagues n\'est pas vide, aucune insertion effectuée');
  //   }
  // } catch (error) {
  //   console.error('Erreur lors de l\'insertion des blagues:', error);
  //   throw error;
  // }
}


module.exports = seedJokes; // Exportez la fonction


// Exécution de la fonction de seed
seedJokes().then(() => {
  console.log('Processus de seed terminé');
}).catch(err => {
  console.error('Erreur lors du processus de seed:', err);
});
