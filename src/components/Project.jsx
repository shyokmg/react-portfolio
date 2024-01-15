import React from 'react';
import { SiGithub } from 'react-icons/si';

function Project({ title, description, deployedLink, githubLink, image }) {
    const cardStyle = {
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };

  return (
    <div className="col-md-6 mb-4">
      <div className="card card card-with-aspect-ratio"  style={cardStyle}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title mb-0 me-2">
              <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h5>
            <h2>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>
            </h2>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;