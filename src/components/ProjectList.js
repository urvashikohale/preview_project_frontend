import React, { useState, useEffect } from "react";
import axios from "axios";
import Preview from "./Preview";

const ProjectList = ({ onProjectClick }) => {
  const [list, setList] = useState([]);
  const loadAllProjects = () => {
    axios
      .get("http://localhost:8000/projects")
      .then((data) => {
        setList(data.data);
      })
      .catch((data) => {
        console.log(data.error);
      });
  };

  useEffect(() => {
    loadAllProjects();
  }, []);

  return (
    <div>
      <div className="projectList">
        {list.map((project) => {
          const createdAtDate = new Date(project.createdAt);
          const formattedDate = `${createdAtDate.getDate()} ${createdAtDate.toLocaleString(
            "en-US",
            { month: "long" }
          )}`;
          console.log("PROJECT", project);

          return (
            <div key={project._id}>
              <div className="projectCard">
                <div>
                  <img
                    src={`http://localhost:8000/project/image/${project._id} `}
                    alt="Project"
                    className="listImage"
                    onClick={() => onProjectClick(project.photo.data)}
                  />
                </div>

                <div className="projectDetails">
                  <p className="detailsText">{project.projectName}</p>
                </div>
                <div className="projectBottom">
                  <p className="projectDate">{formattedDate}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <ellipse
                      cx="10.7083"
                      cy="6.04167"
                      rx="1.04167"
                      ry="1.04167"
                      fill="#98A2B3"
                    />
                    <circle
                      cx="10.7083"
                      cy="10.2083"
                      r="1.04167"
                      fill="#98A2B3"
                    />
                    <ellipse
                      cx="10.7083"
                      cy="14.375"
                      rx="1.04167"
                      ry="1.04167"
                      fill="#98A2B3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
