import { useState, createContext, useContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const login = (user) => {
    setUser(user);
  };
  const isAuthUser = (isAuth) => {
    setIsAuth(isAuth);
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
  };

  const handleData=(userData)=>{
    setUserData(userData);
  }

  return (
    <AuthContext.Provider value={{ isAuth, user,userData, login, logout, isAuthUser,handleData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
