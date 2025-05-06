# Utilise l'image officielle Node.js en version alpine (plus légère et optimisée)
FROM node:22-alpine
# Définit le répertoire de travail à l'intérieur du conteneur
WORKDIR /app
# Copie les fichiers package.json et package-lock.json (si existant) pour gérer les dépendances
COPY package*.json ./
# Installe uniquement les dépendances en mode production (sans les devDependencies)
RUN npm install --production
# Copie le fichier principal contenant le code du microservice
COPY index.js ./
# Expose le port 3001 pour permettre l'accès au service depuis l'extérieur du conteneur
EXPOSE 3001
# Commande de démarrage du service, qui exécute l'application Node.js
CMD ["node", "index.js"]
