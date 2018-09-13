import React from 'react';
import { Link } from "react-router-dom";


const About = () => (
  <div className="about">
    <div className="about-links content-container">      
      <Link className="link" to="/portfolio">&#60;Projects&#62;</Link>
      <Link className="link" to="/contact">&#60;Contact&#62;</Link>
    </div>
    <div className="content-container">
      <div className="about-content">
        <h1 className="about-title">&#62;_ABOUT ME</h1>
        <p className="resume">Hi, my name is Juan Sebastian Rojas. I'm a enthusiastic Front-End Web Developer from Bogota, Colombia. My goal is to become Full-Stack- Web Developer and make real ideas from all around the world.</p>
        <p className="skills"><span className="badge">HTML5</span> <span className="badge">CSS3</span> <span className="badge">Sass</span> <span className="badge">Bootstrap</span> <span className="badge">JavaScript</span> <span className="badge">jQuery</span> <span className="badge">React</span> <span className="badge">Webpack</span> <span className="badge">Git</span> <span className="badge">Github</span></p>
      </div>
      <div className="profile">
        <div className="photo">
          <img src="images/0.jpeg" alt="Juan Rojas"></img>
				</div>
        <div className="social">
          <a href=""><img src="images/github.png"></img></a>
          <a href=""><img src="images/linkedin.png"></img></a>
          <a href=""><img src="images/instagram.png"></img></a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
