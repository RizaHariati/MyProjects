import React, { useState, useContext, useRef } from "react";
import { nav_menu } from "./data/data_menu";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isPromo, setIsPromo] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [submenuContent, setSubmenuContent] = useState([]);
  const [location, setLocation] = useState(0);
  const refNavBar = useRef(null);

  const showSubmenu = () => {
    setIsSubmenu(true);
  };
  const hideSubmenu = () => {
    setIsSubmenu(false);
  };

  const showNavLink = (id, position) => {
    showSubmenu();
    setLocation(position);
    const nav = nav_menu.filter((menu) => menu.id === id);
    setSubmenuContent(nav[0].links);
  };
  return (
    <AppContext.Provider
      value={{
        isPromo,
        setIsPromo,
        showNavLink,
        isSubmenu,
        hideSubmenu,
        showSubmenu,
        submenuContent,
        refNavBar,
        location,
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
