import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useGlobalContext } from "../context";
import Home from "../component-menu/Home";
import Menu from "../Menu";

const Main = () => {
  const { url } = useRouteMatch();
  const [newUrl, setNewUrl] = useState("");
  const { hideSubmenu } = useGlobalContext();
  useEffect(() => {
    if (url === "/") {
      setNewUrl("/home");
    }
    setNewUrl(url);
  }, [url]);
  return (
    <div className="container" onMouseOver={hideSubmenu}>
      <Home />
      <Menu url={newUrl} />
    </div>
  );
};

export default Main;
