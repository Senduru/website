import { useEffect, useState } from 'react';
import '../Css/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/Data.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="project-showcase">
      <h1 className="text-center mb-4">My Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h2>{project.title}</h2>

            <ul>
              {project.description
                ?.split('. ')
                .map((point, index) => point && <li key={index}>{point}</li>)}
            </ul>

            <ul className="technologies">
              {project.technologies?.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
