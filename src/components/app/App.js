import './App.css';
// import CenterBanner from '../centerBanner/CenterBanner.js'
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Sphere = (props) => {

  return (
    <mesh visible userData={{ test: "hey test object "}} position ={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
    );
}

const Light = ({brightness, color}) => {

  return (
      <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0,0,0]}
      penumbra={1}
      castShadow
      />
    );
}

function App() {


  return (
    <div className="app">
      <h1 className="title background">Welcome To the Land Of Code</h1>
      <div className="computer_container">
      <Canvas>
      <Light brightness={7} color={"blue"} />
        <Sphere />
      }
      }
      </Canvas>

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
