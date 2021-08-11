import React from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "./context";
const Home = () => {
  const { projectOn } = useGlobalContext();
  const history = useHistory();
  const handlewheel = (e) => {
    if (e.deltaY > 0) {
      history.push("/projects");
      projectOn();
    }
  };
  return (
    <div
      className="home"
      onWheel={(e) => {
        handlewheel(e);
      }}
    >
      <div className="profile-picture">
        <img src="/assets/images/MyPhoto.jpg" alt="Riza" />
      </div>
      <h1>
        Hi, I'm Riza Hariati
        <br />
        Welcome to My page!
      </h1>
    </div>
  );
};

export default Home;
