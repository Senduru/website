

import  { useState, useEffect } from "react";
import "../Css/Home.css";

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    console.log("itest from Home top...")
    fetch("/Data.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Fallback for data loading
  }

  return (
    
    <section id="home" className="container home-container d-flex align-items-center">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-6 col-md-12 text-section">
            <h1 className="name">
              {data.title} <span>{data.name}</span>
            </h1>
            <p className="role">{data.role}</p>
            <a
              href={data.downloadCV.file}
              download={data.downloadCV.file}
              className="btn btn-primary download-btn"
            >
              {data.downloadCV.label}
            </a>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 col-md-12 image-section">
            <div className="image-wrapper">
              <img src={data.profileImage} alt="Profile" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};
console.log("itest from Home bottom...")