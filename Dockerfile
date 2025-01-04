# Stage 1: Build your Astro project
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Copy all files and build the Astro project
COPY . .
RUN pnpm run build

# Stage 2: Set up the Nginx server
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output from the build stage into the Nginx web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 5000 in Docker, and 6543 on the host
EXPOSE 5000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
