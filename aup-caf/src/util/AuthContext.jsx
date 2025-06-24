// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, isAuthenticated: false, user: null });

  useEffect(() => {
    // Call backend to check auth status using cookie
    axios.get('http://localhost:4000/auth/auth', { withCredentials: true })
      .then((res) => {
        console.log("Role Check response:", res.data.user.role);
        setAuth({ loading: false, isAuthenticated: true, user: res.data.user.role });
      })
      .catch(() => {
        setAuth({ loading: false, isAuthenticated: false, user: null });
      });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
