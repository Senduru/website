
import { useState, useEffect } from 'react';
import '../Css/Tool.css'; // Add your custom styles

export const Tools = () => {
  const [tools, setTools] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch("Data.json")
      .then((response) => response.json())
      .then((data) => setTools(data.tools))
      .catch((error) => console.error("Error fetching tools:", error));
  }, []);

  const handleToolCardClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <div className="tool-container container">
      <h1>Software Tools</h1>
      <div className="ToolCard-list">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`ToolCard ${active === index ? 'active' : ''}`}
            onClick={() => handleToolCardClick(index)}
          >
            <div className="ToolCard-top">
              <img src={tool.image} alt={tool.name} />
            </div>
            <h3>{tool.name}</h3>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${tool.usage}%`, backgroundColor: '#4caf50' }}
              ></div>
            </div>
            <div className="rating">
              {'★'.repeat(tool.rating)}{'☆'.repeat(5 - tool.rating)}
            </div>
            {active === index && (
              <div className="details">
                <p>Usage: {tool.usage}%</p>
                <p>Rating: {tool.rating}/5</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
