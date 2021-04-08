const API_KEY = import.meta.env.VITE_THEMEALDB_API_KEY;

// List all meal categories
const API_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}/`;

export { API_URL };
