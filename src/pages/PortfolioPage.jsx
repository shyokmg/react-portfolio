import React from 'react';
import Project from '../components/Project'



function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      deployedLink: 'https://project1.com',
      githubLink: 'https://project1.com',
      image: '../assets/images/blog_app.png',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      deployedLink: 'https://project2.com',
      githubLink: 'https://project1.com',
      image: '../assets/images/blog_app.png',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      deployedLink: 'https://project3.com',
      githubLink: 'https://project1.com',
      image: '../assets/images/blog_app.png',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description of Project 4',
      deployedLink: 'https://project4.com',
      githubLink: 'https://project1.com',
      image: '../assets/images/blog_app.png',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description of Project 5',
      deployedLink: 'https://project5.com',
      githubLink: 'https://project1.com',
      image: '../assets/images/blog_app.png',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description of Project 6',
      deployedLink: 'https://project6.com',
      githubLink: 'https://project1.com',
      image: '../assets/images/blog_app.png',
    },
    // Add more project objects here
  ];

  return (
    <div className="container">
      <h2>Portfolio</h2>
    <div className="row">
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