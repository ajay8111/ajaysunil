import React from 'react';
import './Skills.css';
import pythonIcon from '../assets/python.png';
import flutterIcon from '../assets/flutter.png';
import reactIcon from '../assets/react.png';
import firebaseIcon from '../assets/firebase.png';
import mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <img src={pythonIcon} alt="Python" className="skill-icon" />
          <p>Python</p>
        </div>
        <div className="skill">
          <img src={flutterIcon} alt="Flutter" className="skill-icon" />
          <p>Flutter</p>
        </div>
        <div className="skill">
          <img src={reactIcon} alt="ReactJS" className="skill-icon" />
          <p>ReactJS</p>
        </div>
        <div className="skill">
          <img src={firebaseIcon} alt="Firebase" className="skill-icon" /> {/* Add Firebase icon */}
          <p>Firebase</p>
        </div>
        <div className="skill">
          <img src={mongo} alt="MongoDB" className="skill-icon" /> {/* Add Firebase icon */}
          <p>MongoDB</p>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
