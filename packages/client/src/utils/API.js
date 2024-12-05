// Determine the correct API URL based on the environment

// solo deploy (Production or when VITE_API_URL is set)
export const API = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1'; // Fallback to local if not set

// local (for local development)
console.log("API Base URL:", API); // For debugging purposes, log the current API base URL
