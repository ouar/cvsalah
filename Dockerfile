# Étape 1 : build de l'app React
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Étape 2 : image NGINX minimale et sécurisée
FROM nginx:1.25-alpine

# Copie des fichiers build dans le dossier NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

# Suppression de la config par défaut et ajout d'une custom
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Exposition du port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
