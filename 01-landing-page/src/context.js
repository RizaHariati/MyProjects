import React, { useState, useContext, useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-mode");
  const refHome = useRef(null);
  const refProjects = useRef(null);
  const refAbout = useRef(null);

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
  const homeOn = () => {
    refHome.current.style.textAlign = "right";
    refProjects.current.style.textAlign = "left";
    refAbout.current.style.textAlign = "left";
  };

  const projectOn = () => {
    refHome.current.style.textAlign = "left";
    refProjects.current.style.textAlign = "right";
    refAbout.current.style.textAlign = "left";
  };

  const aboutOn = () => {
    refHome.current.style.textAlign = "left";
    refProjects.current.style.textAlign = "left";
    refAbout.current.style.textAlign = "right";
  };
  return (
    <AppContext.Provider
      value={{
        toggleMode,
        refHome,
        refProjects,
        refAbout,
        homeOn,
        projectOn,
        aboutOn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
