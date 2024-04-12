import axios from "axios";

const BASE_URL = "http://localhost:3000/auth";
// const BASE_URL = "http://localhost:3000/auth"

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // Enable credentials
});

// Function to register a new user
export const register = (userData) => {
    return api.post('/register', userData);
};

export default {
    register
}