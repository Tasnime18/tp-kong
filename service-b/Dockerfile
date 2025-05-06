# Utilisation de l'image officielle Node.js en version alpine
# Alpine est une version allégée de Linux qui optimise la taille du conteneur
FROM node:22-alpine
# Définition du répertoire de travail dans le conteneur
WORKDIR /app
# Ces fichiers contiennent les dépendances du projet
COPY package*.json ./
# Installation des dépendances du projet en mode production
# L'option --production permet d'éviter les dépendances de développement
RUN npm install --production
# Copie du fichier principal contenant le code du microservice
COPY index.js ./
# Exposition du port 3002 pour permettre l'accès au service depuis l'extérieur du conteneur
EXPOSE 3002
# Commande de démarrage du service, qui exécute le serveur Node.js
CMD ["node", "index.js"]
