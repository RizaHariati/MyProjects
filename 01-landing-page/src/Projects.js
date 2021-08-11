import React from "react";
import { projects } from "./data";
import { useHistory } from "react-router";
import { useGlobalContext } from "./context";
const Projects = () => {
  const { homeOn, aboutOn } = useGlobalContext();
  const history = useHistory();
  const handlewheel = (e) => {
    if (e.deltaY < 0) {
      history.push("/");
      homeOn();
    } else {
      history.push("/about");
      aboutOn();
    }
  };
  return (
    <div
      className="projects"
      onWheel={(e) => {
        handlewheel(e);
      }}
    >
      <div className="project-title">
        <h1>
          Projects <span>exercise</span>
        </h1>
      </div>
      <div className="project">
        {projects.map((project) => {
          const { id, url, type, title, tools } = project;
          return (
            <div key={id} className="project-items">
              <div className="p-image">
                <img src={`/assets/images/${url}`} alt="title" />
              </div>
              <div className="p-info">
                <h3 className="p-name">{title}</h3>
                <h4 className="type">{type}</h4>

                <ul>
                  {tools.map((tool, index) => {
                    return <li key={index}>{tool}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
