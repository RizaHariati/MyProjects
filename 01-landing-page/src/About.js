import React from "react";
const About = () => {
  return (
    <div className="about">
      <div className="project-title">
        <h1>About</h1>
      </div>
      <div className="opening-text">
        <div className="profile-picture2">
          <img src="/assets/images/MyPhoto.jpg" alt="Riza" />
        </div>
        <p className="text">
          It was June 2020 when I first decided that I'm going to start learning
          to code and this website is dedicated to show you what I've learned so
          far.
        </p>
      </div>
      <div className="tools">
        <div className="tool-list">
          <h4 className="tool-title">Development</h4>
          <div className="tool">
            <p className="tool-text">Javascript/Css/Html</p>
            <p className="tool-text">ReactJS</p>
            <p className="tool-text">Nodejs</p>
            <p className="tool-text">Express</p>
            <p className="tool-text">PHP</p>
            <p className="tool-text">Java</p>
            <p className="tool-text">NetBeans</p>
            <p className="tool-text">JQuery</p>
          </div>
        </div>
        <div className="tool-list">
          <h4 className="tool-title">Design</h4>
          <div className="tool">
            <p className="tool-text">Photoshop</p>
            <p className="tool-text">Sketchup</p>
            <p className="tool-text">3dsMax</p>
            <p className="tool-text">AutoCAD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
