import { useState, useEffect, createContext } from 'react';
import Cookie from "js-cookie";

import { verifyToken } from '../services/auth.services.js';

export const AuthContext = createContext(); 

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const checkLogin = async() => {

            const cookies = Cookie.get();

            if(!cookies.token) {
                setUser(null);
                setIsAuthenticated(false);
                return setLoading(false);
            }


            try {

                const verifyTokenService = await verifyToken(cookies.token);
                if (!verifyTokenService) {
                    setUser(null);
                    setIsAuthenticated(false);
                    return setLoading(false);
                }

                setIsAuthenticated(true);
                setLoading(false)
                return setUser(verifyTokenService.data);
                
            } catch (error) {
                setUser(null);
                setIsAuthenticated(false);
                return setLoading(false);
            }
            
        }
        checkLogin();

    }, []);


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            loading,
            setLoading
        }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
