# Utiliser une image Node.js officielle comme base
FROM node:20

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm ci --only=production

# Copier les fichiers du projet dans le conteneur
COPY . .

# Exposer le port sur lequel l'application s'exécute
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["node", "app.js"]
