

import  { useState, useEffect } from "react";
import "../Css/about.css";

export const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/Data.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Fallback for data loading
  }

  return (
    <div className="about-section container" id="about">
      {/* Name and Picture */}
      <div className="text-center">
        <img src={data.Aboutimage} alt="Profile" className="about-profile-image" />
      </div>
      {/* Paragraph */}
      <h1 className="text-center">
        {data.heading} <span>{data.subHeading}</span>
      </h1>
      {/* <p className="mt-3 text-center p-5 bg-primary rounded">{data.AboutDescription}</p> */}
      {/* <p className="mt-3 text-center p-5 bg-primary rounded">{data.AboutDescription}</p> */}
      <div className="mt-1 text-center p-5 bg-primary rounded">
  
  {/* Paragraph 1 - VHS */}
  <p className="mb-3">
    {data.AboutDescription[0]}
    <a
      href="https://vhschennai.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="custom-link"
    >
      {data.AboutDescription[1]}
    </a>
    {data.AboutDescription[2]}
  </p>

  {/* Paragraph 2 - ENA Game Studio */}
  <p className="mb-3">
    {data.AboutDescription[3]}
    <a
      href="https://enagamestudio.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="custom-link"
    >
      {data.AboutDescription[4]}
    </a>
    {data.AboutDescription[5]}
  </p>

  {/* Paragraph 3 - Skills & Goal */}
  <p>
    {data.AboutDescription[6]}
  </p>

</div>

{/* 
                    Table
      <div className="table-responsive mt-4">
        <table className="table">
          <thead>
            <tr>
              {Object.keys(data.table.section1[0]).map((key, index) => (
                <th key={index}>{key}:</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(data.table.section1[0]).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          </tbody>
          <thead>
            <tr>
              {Object.keys(data.table.section2[0]).map((key, index) => (
                <th key={index}>{key}:</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(data.table.section2[0]).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Button */}
      {/* <div className="button-container d-flex justify-content-center">
        <a href={data.button.link}>
          <button className="btn btn-outline-primary download-btn-2">
            {data.button.label}
          </button>
        </a>
      </div> */}

      {/* College Section */}
      <div className="college-container mt-5">
        <div className="row align-items-center">
          {/* Left Side: College Details */}
          <div className="col-md-6">
            <div className="college-details">
              <h1 className="college-title">{data.college.name}</h1>
              <p className="college-description">{data.college.description}</p>
              <p className="college-address">
                <strong>Location:</strong> {data.college.address}
              </p>
            </div>
          </div>

          {/* Right Side: College Image */}
          <div className="col-md-6 text-center">
            <a
              href={data.college.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={data.college.image}
                alt="College"
                className="college-image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
