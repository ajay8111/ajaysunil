import React from 'react';
import './Project.css'; // Make sure this CSS file includes the new styles

const projects = [
  {
    title: 'Spelling Checker App',
    description: 'Simple Spelling Check Desktop Application Using Python',
    link: 'https://github.com/ajay8111/SpellingChckerApp',
    image: require('../assets/spelling.png'), // Add your image here
  },
  {
    title: 'Movie Watch Online',
    description: 'Watch Movies Free Movies Online Developed Using React.js',
    link: 'https://github.com/ajay8111/moviePage',
    image: require('../assets/movie.png'), // Add your image here
  },
  {
    title: 'Board Game App',
    description: 'Wireless Board Controlling Application Developed By Using Flutter and IOT',
    link: 'https://github.com/ajay8111/App',
    image: require('../assets/board.png'), // Add your image here
  },
  {
    title: 'Parallax Web Design',
    description: 'A brief description of Parallax Web Design',
    link: 'https://github.com/ajay8111/parallax_web',
    image: require('../assets/parallax.png'), // Add your image here
  },
  {
    title: 'QR Code Generator',
    description: 'Generate Anything Into A QR Code',
    link: 'https://github.com/ajay8111/QR_code_genrator_website',
    image: require('../assets/QR.png'), // Add your image here
  },
  {
    title: 'Login Form',
    description: 'Cartoon Style Login Form Design',
    link: 'https://github.com/ajay8111/login',
    image: require('../assets/login.png'), // Add your image here
  },
];

const Works = () => {
  return (
    <section className="works">
      <h2>My Works</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
