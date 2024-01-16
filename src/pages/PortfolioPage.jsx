import React from "react";
import Project from "../components/Project";
import blogAppImg from "../assets/images/blog_app.png";
import textEditorImg from "../assets/images/text_editor.png";
import employeeAppImg from "../assets/images/employee_app.png";
import noteTakerImg from "../assets/images/note_taker.png";
import weatherAppImg from "../assets/images/weather_app.png";
import gameGeniusImg from "../assets/images/game_genius.png";

// Portfolio page component
function PortfolioPage() {
  // Array of project objects with project details for the portfolio page
  const projects = [
    {
      id: 1,
      title: "The Tech Blog",
      description: "Description of Project 1",
      deployedLink: "https://project1.com",
      githubLink: "https://project1.com",
      image: blogAppImg,
    },
    {
      id: 2,
      title: "JATE",
      description: "Description of Project 2",
      deployedLink: "https://project2.com",
      githubLink: "https://project1.com",
      image: textEditorImg,
    },
    {
      id: 3,
      title: "Employee Manager",
      description: "Description of Project 3",
      deployedLink: "https://project3.com",
      githubLink: "https://project1.com",
      image: employeeAppImg,
    },
    {
      id: 4,
      title: "Note Taker",
      description: "Description of Project 4",
      deployedLink: "https://project4.com",
      githubLink: "https://project1.com",
      image: noteTakerImg,
    },
    {
      id: 5,
      title: "Weather Application",
      description: "Description of Project 5",
      deployedLink: "https://project5.com",
      githubLink: "https://project1.com",
      image: weatherAppImg,
    },
    {
      id: 6,
      title: "Game Genius",
      description: "Description of Project 6",
      deployedLink: "https://project6.com",
      githubLink: "https://project1.com",
      image: gameGeniusImg,
    },
  ];

  return (
    <div className="container p-5">
      <h1>Portfolio</h1>

      <div className="row p-2">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            githubLink={project.githubLink}
            description={project.description}
            deployedLink={project.deployedLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
