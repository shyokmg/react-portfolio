import { SiGithub } from "react-icons/si";

function Project({title, description, deployedLink, githubLink}) {
    return (
        <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
            
          </h5>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <SiGithub />
          </a>
          <p className="card-text">{description}</p>
          
        </div>
      </div>
    </div>
    )
}

export default Project