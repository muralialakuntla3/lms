# Docker file for react app created using vite
FROM node:16 as build
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Build app
COPY . .
RUN npm run build

# Docker file for nginx server to serve react app build files (spa routing)
FROM nginx:alpine
# Copy build files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html
# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf 
# Copy a script to replace environment variables in env-config.js
COPY entrypoint.sh /usr/share/nginx/entrypoint.sh
# Make the script executable
RUN chmod +x /usr/share/nginx/entrypoint.sh
# Expose port 80
EXPOSE 80
# Start Nginx and keep it running in the foreground
CMD ["/bin/sh", "/usr/share/nginx/entrypoint.sh"]
