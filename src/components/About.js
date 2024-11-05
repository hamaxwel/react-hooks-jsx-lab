import React from 'react';
import { image } from '../data/user'; 

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Welcome to my portfolio! I'm passionate about web development and eager to build exciting projects.</p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;

