import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Navbar from './../Navbar/Navbar.js';
import Logo from './../Logo/Logo.js';
import Particles from 'react-tsparticles';
import Projects from './../Projects/Projects.js';
import ContactCard from  './../ContactCard/ContactCard.js';

const Home = ( {onRouteChange, route} ) => {
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
			<div className="h-10 background">
				<Navbar onRouteChange={onRouteChange} Link={Link} />
			</div>
			<Logo />
			<Outlet />
			{route === 'home' ?  <Projects route={route} Link={Link} onRouteChange={onRouteChange}/> : <p></p> }
			<ContactCard />
		</div>
		);
}

export default Home;