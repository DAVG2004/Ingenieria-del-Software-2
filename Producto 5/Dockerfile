# ETAPA 1
FROM node:20-alpine AS build
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm prune --production

# ETAPA 2
FROM node:20-alpine AS production
ENV NODE_ENV=production
WORKDIR /usr/src/app

USER node

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/package.json ./package.json
COPY --chown=node:node --from=build /usr/src/app/server.js ./server.js

EXPOSE 8080
CMD ["node", "server.js"]