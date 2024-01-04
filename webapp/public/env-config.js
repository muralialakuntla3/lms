// public/env-config.js
(function(window) {
  window.env = window.env || {};
  window.env.VITE_API_URL = window.env.VITE_API_URL || 'http://localhost:8080/api';
}(this));
