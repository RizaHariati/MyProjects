import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-mode");

  const toggleMode = (e) => {
    e.preventDefault();

    if (theme === "dark-mode") {
      setTheme("light-mode");
      e.target.style.left = "50%";
    } else {
      setTheme("dark-mode");
      e.target.style.left = "0";
    }
    document.documentElement.classList = theme;
  };
  return (
    <AppContext.Provider value={{ toggleMode }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
