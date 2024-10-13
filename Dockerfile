# Étape 1 : Utiliser une image de base pour Node.js
FROM node:18-alpine AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le contenu du projet dans le conteneur
COPY . .

# Construire l'application (créer le build de production)
RUN npm run build

# Étape 2 : Créer une nouvelle image pour servir l'application
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers build de l'étape précédente
COPY --from=build /app/build ./build

# Installer un serveur simple comme "serve" pour servir l'application
RUN npm install -g serve

# Exposer le port sur lequel l'application sera servie
EXPOSE 3000

# Lancer l'application avec "serve"
CMD ["serve", "-s", "build", "-l", "3000"]
