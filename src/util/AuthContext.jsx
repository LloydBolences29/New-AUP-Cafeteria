// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, isAuthenticated: false, user: null });

  useEffect(() => {
    // Call backend to check auth status using cookie
    axios.get('', { withCredentials: true })
      .then((res) => {
        setAuth({ loading: false, isAuthenticated: true, user: res.data });
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
