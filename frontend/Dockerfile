# Stage 1: Build the Node.js app
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Copy the build output to Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file into the container
COPY myapp.conf /etc/nginx/conf.d/

EXPOSE 8080

# Start Nginx with daemon off
CMD ["nginx", "-g", "daemon off;"]
