# build environment
FROM node:14.17.0 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

# production environment
FROM webdevops/nginx:alpine
COPY --from=build /app/build /app
COPY nginx/main.conf /opt/docker/etc/nginx/main.conf
COPY nginx/vhost.conf /opt/docker/etc/nginx/vhost.conf
EXPOSE 80 443
