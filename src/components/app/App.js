import './App.css';
// import CenterBanner from '../centerBanner/CenterBanner.js'
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Box = (props) => {
  const boxRef = useRef();// This is the same as creating an element in javascirpt

  useFrame((state, delta) => {
    boxRef.current.rotation.x += 0.02;
    boxRef.current.rotation.y += 0.03;
})


  return (
      <mesh
        {...props} //means pass all elements of the props array.
        ref={boxRef}
      >
      <boxGeometry args={[3, 3, 3]} />
      <meshNormalMaterial color= "hotpink" wireFrame={true} />
      </mesh>
    );
}


function App() {


  return (
    <div className="app">
      <h1 className="title background">Welcome To the Land Of Code</h1>
          <Canvas>
            <Box />
          </Canvas>
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
