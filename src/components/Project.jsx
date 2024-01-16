import React from "react";
import { SiGithub } from "react-icons/si";

// Function that gets the project details from the Portfolio page component
function Project({ title, description, deployedLink, githubLink, image }) {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "top left",
  };

  return (
    // Bootstrap structure for the project on each card
    <div className="col-md-6 mb-4">
      <div className="card card-with-aspect-ratio">
        <div className="card-body">
          <div className="card-image" style={cardStyle}></div>
          <div className="content">
            <div className="d-flex align-items-center justify-content-end">
              <h2 className="card-title mb-0 me-2">
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </h2>
              <h2>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <SiGithub />
                </a>
              </h2>
            </div>
            <h4 className="card-text text-end">{description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;