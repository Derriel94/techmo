import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
    
  return (
    <div className="app">
      <h1 className="title background">Welcome To the Land Of Code</h1>
      <div className="centerstagebanner">
        {/*this is how you can pull images from the public folder dynamiclly*/}
        <img src={process.env.PUBLIC_URL+"lightcircle1.png"} alt="first lightimg" height={200} width={200} />
        <img src={process.env.PUBLIC_URL+"lightcircle2.png"} alt="first lightimg" height={200} width={200} />
        <img src={process.env.PUBLIC_URL+"lightcircle3.png"} alt="first lightimg" height={200} width={200} />
        <img src={process.env.PUBLIC_URL+"computerstage.png"} alt="first lightimg" height={200} width={200} />
        <img src={process.env.PUBLIC_URL+"floatingcpu.png"} alt="first lightimg" height={200} width={200} />
        <img src={process.env.PUBLIC_URL+"whitelight.png"} alt="first lightimg" height={200} width={200} />
      </div>
      <h1 className="title background"> About me</h1>
      <div className="aboutme">
        <p>I am a self-taught Full-Stack Developer, practicing in JavaScript. 
        I use technologies such as React and Angular in combination with mySQL,
         PostgreSQL, Express and Node.js to achieve my desired applications. 
         I hold my Code to a high standard practicing clean code techniques 
         that I have picked up from personal readings from books like “Clean Code” 
         by Robert “uncle bob” Martin and online courses such as 
         “The Complete Web Developer: Zero To Mastery” and others. 
         I chose to specialize in JavaScript because of its massive use in the industry, 
         in combination with things like npm, building applications becomes 
         smoother and code becomes more maintainable. 
         I am looking for an opportunity to earn a living wage while developing my craft 
         and becoming a stronger full-stack developer. My dream is to eventually 
         develop my own simulation technology.</p>
      </div>
      <h1 className="title background"> Contact Me</h1>
      <div className="projectslist">

      </div>
    </div>
  );
}

export default App;
