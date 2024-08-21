import React from 'react';
import './About.css';
import resume from '../assets/ajays_resume_.pdf'; // Adjust the path if necessary

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        I am a passionate Fullstack Developer with a strong foundation in Python, Flutter, React.js, and MongoDB.
        With experience across both frontend and backend development, I specialize in building scalable web and mobile applications.
        My expertise includes developing robust APIs, creating intuitive user interfaces, and managing databases effectively.
        I thrive on solving complex problems and delivering high-quality, user-friendly solutions.
      </p>
      <a href={resume} download="Ajay_Sunil_Resume.pdf">
        <button className="resume-button">Download Resume</button>
      </a>
    </section>
  );
};

export default About;
