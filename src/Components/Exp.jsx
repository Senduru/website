import React, { useEffect, useState } from "react";

// CSS loaded from public folder
import "../Css/exp.css";

// Component name is Exp as used in your app
// Data is read from public/data.json -> experience

const Exp = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data.json");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.experience)) {
          setExperience(data.experience);
        } else {
          console.error("experience array not found in data.json");
        }
      })
      .catch((err) => console.error("JSON load error", err));
  }, []);

  return (
    <section className="exp-container" id="experience">
  <h1 className="exp-title" id="exp">Experience</h1>

  <div className="timeline">
    {experience.length === 0 && (
      <p style={{ textAlign: "center" }}>No experience data available</p>
    )}

    {experience.map((item, index) => (
      <div className="timeline-item" key={index}>
        <div className="timeline-dot" />

        <div className="timeline-card">
          
          {/* ✅ ADDED: Company Logo */}
          {/* {item.logo && (
            <div className="exp-logo">
              <img src={item.logo} alt={item.company} />
            </div>
          )} */}
          <div className="company-logo">
            <img src={item.logo} alt={item.company} />
          </div>


          {/* Existing content – unchanged */}
          <h3 className="Role">{item.role}</h3>
          <span className="company">{item.company}</span>
          <span className="duration">{item.duration}</span>

          {Array.isArray(item.points) && (
            <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default Exp;