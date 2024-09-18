import axios from "./axios.js";

export const login = async(credentials) => {
    try {
        
        const response = await axios.post("/login", credentials);
        return response;

    } catch (error) {
        return error;
    }
}

export const verifyToken = async() => {
    try {
        
        const response = await axios.get("/verify-token");
        return response;

    } catch (error) {
        return error;
    }
}

export const register = async(credentials) => {
    try {
        
        const response = await axios.post("/register", credentials);
        return response;

    } catch (error) {
        return error;
    }
}