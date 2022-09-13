import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

const ContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        if (localStorage.getItem("auth"))
            return JSON.parse(localStorage.getItem('auth'));
        return {};
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(AuthContext);
};
export default ContextProvider;