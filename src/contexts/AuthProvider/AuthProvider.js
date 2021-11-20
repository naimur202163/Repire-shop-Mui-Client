import React, { createContext } from 'react';
import useFirebase from './../../hooks/useFirebase';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const allConexts = useFirebase()
    return (

        <AuthContext.Provider value={allConexts} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;