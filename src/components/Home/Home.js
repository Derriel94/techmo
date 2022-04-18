import React from 'react';
import Particles from 'react-tsparticles';
import { Link } from "react-router-dom";

const Home = () => {
  const particleParams = {
    "particles": {
      "color": {
        "value": "#a5cfe3"
      },
      "links": {
        "color": {
          "value": "#a5cfe3"
        },
          "distance": 80,
          "enable": true,
          "opacity": 0.4,
          "shadow": {
            "color": {
              "value": "#a5cfe3",
              "opacity": 0.8,
            },
            "enable": true
          }
        },
        "move": {
          "attract": {
            "rotate": {
              "x": 600,
              "y": 1200
            }
          },
          "enable": true,
          "outModes": {
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          }
        },
        "number": {
          "density": {
            "enable": true
          },
          "value": 80
        },
        "opacity": {
          "value": 0.5,
          "animation": {
            "speed": 1,
            "minimumValue": 0.1
          }
        },
        "shadow": {
          "blur": 5,
          "enable": true,
          "offset": {
            "x": 3,
            "y": 3
          }
        },
        "size": {
          "random": {
            "enable": true
          },
          "value": {
            "min": 1,
            "max": 5
          },
          "animation": {
            "speed": 100,
            "minimumValue": 0.1
          }
        }
      }

  };

	return (
		<div className="App tc">
			<Particles className="particles" params={particleParams} />
      <h1 className="title neonText">Ghost Code Center!</h1>
      <div className="banner"> 
        <img alt="GhostCode" className="black" src="./NavLogoGC.png" />
      </div>
      <div className="projectsGrid">
      <h1 className="title neonText">Discover What We Can Do For You! </h1>
      <div className="black projects">
            <Link to="/projects" style={{ textDecoration: 'none', color: 'black' }} className="box bg-light-blue br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
              Front-End Development/Graphic Design!
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none', color: 'black' }} className="box bg-light-green br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
              Landing Pages!
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none', color: 'black' }} className="box bg-purple  br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
              Games and More...
            </Link>
            </div>
        </div>
	
		</div>
		);
}

export default Home;