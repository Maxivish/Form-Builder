import axios from "axios";
import { API } from "./API.js";

// axios instance for public routes
export const axiosOpen = axios.create({
  baseURL: API, // Use the dynamically set API URL
});

// axios instance for private routes (authenticated requests)
export const axiosPrivate = axios.create({
  baseURL: API, // Use the dynamically set API URL
});
