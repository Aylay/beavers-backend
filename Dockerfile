# ---------- Étape 1 : build ----------
FROM node:20-bookworm-slim AS build

# Outils nécessaires pour compiler better-sqlite3 (module natif)
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/app

# Dépendances d'abord : Docker met cette couche en cache tant que
# package.json et yarn.lock ne changent pas
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

# Code source puis build de l'admin
COPY . .
ENV NODE_ENV=production
RUN yarn build

# ---------- Étape 2 : image finale ----------
FROM node:20-bookworm-slim

WORKDIR /opt/app
ENV NODE_ENV=production

# On récupère l'app construite, en la donnant à l'utilisateur non-root "node"
COPY --from=build --chown=node:node /opt/app ./

# Dossier des médias : créé ici pour qu'il appartienne à "node"
# quand Coolify y montera le volume persistant
RUN mkdir -p /opt/app/public/uploads && chown -R node:node /opt/app/public/uploads

USER node
EXPOSE 1337

CMD ["yarn", "start"]
