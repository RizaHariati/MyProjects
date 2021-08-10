import React from "react";
import { useGlobalContext } from "./context";

const Mode = () => {
  const { toggleMode } = useGlobalContext();
  return (
    <div className="mode-container">
      <p>dark mode</p>
      <button className="toggle-btn" onClick={toggleMode}></button>
      <p>light mode</p>
    </div>
  );
};

export default Mode;
