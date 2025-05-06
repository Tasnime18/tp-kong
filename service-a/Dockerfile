# Image officielle Node.js
FROM node:22-alpine

# Répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./
RUN npm install --production

COPY index.js ./

# Exposer le port utilisé
EXPOSE 3001

# Commande de démarrage
CMD ["node", "index.js"]
