#!/bin/bash
# Replace the placeholder in env-config.js with the actual environment variable
sed -i 's|window.env.VITE_API_URL = .*|window.env.VITE_API_URL = "'$VITE_API_URL'";|' /usr/share/nginx/html/env-config.js

# Start Nginx
nginx -g 'daemon off;'
