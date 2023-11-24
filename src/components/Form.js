import React, { useState } from "react";
import axios from "axios";
import "../index.css";
import Preview from "./Preview";

const Form = ({ onFileChange }) => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    onFileChange(file);
  };

  const submitForm = () => {
    const formData = new FormData();
    formData.append("projectName", name);

    formData.append("photo", selectedFile, selectedFile.name);

    axios
      .post("http://localhost:8000/project/create", formData)
      .then((res) => {
        console.log("Response", res);
        alert("File Upload success");
      })
      .catch((err) => {
        console.error("Error", err);
        alert("File Upload Error");
      });
  };
  return (
    <div className="divflex">
      <div className="proj">
        <div className="startNew">
          <div className="heading">Start a new Project</div>
          <div className="description">
            Select and browse your product image and start experimenting
          </div>
        </div>
        <form>
          <div className="step1">
            <p className="step">Step 1</p>
            <div className="nameBox">
              <input
                type="text"
                value={name}
                placeholder="Your Project name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="step2">
            <p className="step">Step 2</p>
            <div className="uploadBox">
              <input
                type="file"
                accept="image/*"
                id="upload-file"
                onChange={handleChange}
                hidden
              />

              <label htmlFor="upload-file" className="uploadFile">
                Upload your Product image
              </label>
            </div>
          </div>
          <div>
            <div>
              <button onClick={submitForm} className="submitButton">
                Create new project
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
