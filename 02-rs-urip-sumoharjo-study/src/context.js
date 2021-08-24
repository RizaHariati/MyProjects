import React, { useState, useContext, useRef, useEffect } from "react";
import { nav_menu } from "./data/data_menu";
import { data_dokter } from "./data/data_dokter";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isPromo, setIsPromo] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [submenuContent, setSubmenuContent] = useState([]);
  const [location, setLocation] = useState(0);
  const [modal, setModal] = useState(false);
  const [modalID, setModalID] = useState("");
  const [term, setTerm] = useState({ termName: "all", key: "all" });
  const [dokterList, setDokterList] = useState(false);
  const [dataDokter, setDataDokter] = useState(data_dokter);
  const refNavBar = useRef(null);

  const hideDokterList = () => {
    setDokterList(false);
  };

  const showDokterList = () => {
    setDokterList(true);
  };
  useEffect(() => {
    let newData = data_dokter;
    const key = term.key;
    const termName = term.termName;
    if (termName === "") {
      hideDokterList();
    }
    if (termName === "special") {
      newData = data_dokter.filter((data) => data.poli === key);
    } else if (termName === "dokter") {
      newData = data_dokter.filter((data) =>
        data.nama.toLowerCase().match(key.toLowerCase())
      );
    }
    setDataDokter(newData);
  }, [term]);

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

  const showModal = (id) => {
    setModalID(id);
    setModal(true);
  };
  const hideModal = (id) => {
    setModalID(id);
    setModal(false);
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
        modal,
        hideModal,
        showModal,
        modalID,
        setTerm,
        term,
        showDokterList,
        hideDokterList,
        dokterList,
        dataDokter,
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
