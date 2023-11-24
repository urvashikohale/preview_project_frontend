import React, { useState } from "react";
import Form from "./Form";
import ProjectList from "./ProjectList";
import "../index.css";
import Preview from "./Preview";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleProjectClick = (project) => {
    if (project && project.data && project.data.length > 0) {
      const imageDataChunks = project.data;
      const imageDataArray = Uint8Array.from(imageDataChunks.flat());
      const blob = new Blob([imageDataArray], {
        type: project.data.contentType,
      });
      const imageFile = new File([blob], "project_image.png", {
        type: project.data.contentType,
      });

      setSelectedFile(imageFile);
    } else {
      console.error("Invalid project data structure.");
    }
  };

  return (
    <div className="Home">
      <div className="nav">
        <div className="left">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.28333 0.00333602H2.84C2.08333 0.00333602 1.37 0.300003 0.833334 0.833336C0.296667 1.36667 0 2.08667 0 2.84334V8.28667H3.10667V3.11334H8.28L8.28333 0.00333602Z"
                fill="url(#paint0_linear_1_45)"
              />
              <path
                d="M23.9967 21.1633V15.72H20.8867V20.89H15.71V24H21.16C21.9167 24 22.63 23.7033 23.1667 23.17C23.7033 22.6333 23.9967 21.92 23.9967 21.1633Z"
                fill="url(#paint1_linear_1_45)"
              />
              <path
                d="M3.11 20.89V17.37L6.33333 14.1467L9.90667 17.72C11.16 18.9733 13.1933 18.9733 14.4467 17.72L18.08 14.0867L23.79 8.28667C23.8533 8.17333 23.9033 8.05333 23.9367 7.93C23.97 7.80667 23.99 7.68333 23.9933 7.55667C23.9933 7.54 23.9933 7.52333 23.9933 7.50333V2.83667C23.9933 2.08 23.6967 1.36667 23.16 0.833333C22.6233 0.296667 21.9133 0 21.1567 0H15.71V3.11H20.8867V6.63333L18.03 9.49L14.4533 5.91333C14.22 5.68 13.9567 5.49 13.6767 5.34C12.4633 4.70333 10.93 4.89667 9.91333 5.91333L0.473333 15.3533C0.363333 15.4633 0.273333 15.5833 0.2 15.7167C0.15 15.8067 0.11 15.9033 0.08 16L0.07 15.99L0.06 16.0167C0.03 16.1067 0.01 16.1967 0 16.29V21.16C0 21.9167 0.296667 22.63 0.83 23.1633C1.36667 23.7 2.07667 23.9967 2.83333 23.9967H8.28V20.89H3.10667H3.11ZM12.18 9.09667L14.9033 11.82L12.18 14.5433L9.45667 11.82L12.18 9.09667Z"
                fill="url(#paint2_linear_1_45)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_45"
                  x1="3.71948"
                  y1="25.2004"
                  x2="23.9567"
                  y2="0.00388958"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9801ED" />
                  <stop offset="1" stop-color="#E063E6" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_45"
                  x1="3.71948"
                  y1="25.2004"
                  x2="23.9567"
                  y2="0.00388958"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9801ED" />
                  <stop offset="1" stop-color="#E063E6" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_45"
                  x1="3.71948"
                  y1="25.2004"
                  x2="23.9567"
                  y2="0.00388958"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9801ED" />
                  <stop offset="1" stop-color="#E063E6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="yourProject">Your Projects</div>
        </div>
        <div className="right"></div>
      </div>
      <div className="flexColumn">
        <div className="leftComponent">
          <div className="projectFolder">
            <div className="folder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.8334 5.83333L9.90374 3.9741C9.63619 3.439 9.50241 3.17144 9.30283 2.97597C9.12634 2.80311 8.91362 2.67164 8.68008 2.59109C8.41599 2.5 8.11686 2.5 7.5186 2.5H4.33335C3.39993 2.5 2.93322 2.5 2.5767 2.68166C2.2631 2.84144 2.00813 3.09641 1.84834 3.41002C1.66669 3.76654 1.66669 4.23325 1.66669 5.16667V5.83333M1.66669 5.83333H14.3334C15.7335 5.83333 16.4336 5.83333 16.9683 6.10582C17.4387 6.3455 17.8212 6.72795 18.0609 7.19836C18.3334 7.73314 18.3334 8.4332 18.3334 9.83333V13.5C18.3334 14.9001 18.3334 15.6002 18.0609 16.135C17.8212 16.6054 17.4387 16.9878 16.9683 17.2275C16.4336 17.5 15.7335 17.5 14.3334 17.5H5.66669C4.26656 17.5 3.56649 17.5 3.03171 17.2275C2.56131 16.9878 2.17885 16.6054 1.93917 16.135C1.66669 15.6002 1.66669 14.9001 1.66669 13.5V5.83333Z"
                  stroke="#B225EB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="project">Project</div>
          </div>
        </div>
        <div className="newProject">
          <Form onFileChange={handleFileChange} />
        </div>
        {/* {selectedFile && <Preview imageSRC={selectedFile.imageSRC} />} */}
        <Preview imageSRC={selectedFile} />

        <div className="recent">
          <div className="recentFlex">
            <p className="recentProjects">Your recent projects</p>
            <p className="recenttext">
              Select and browse your project image and start experimenting
            </p>
          </div>

          <div className="cardList">
            <ProjectList onProjectClick={handleProjectClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
