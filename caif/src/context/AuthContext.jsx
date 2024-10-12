import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Logic to handle login (you might want to call an API here)
    setUser({ email });
    localStorage.setItem("user", JSON.stringify({ email }));
    // Redirect to the /viewlab page
    window.location.href = "/viewlab";
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // Redirect to the home page
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context; // Return the context directly
};

export default AuthContext;
