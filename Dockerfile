# Stage 1: Build the Angular application
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Clean npm cache
RUN npm cache clean --force

# Install dependencies
RUN npm install --force

# Copy the rest of your application files
COPY . .

# Build the Angular application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:1.23

# Copy the built Angular files from the previous stage
COPY --from=build /app/dist/hyper /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
