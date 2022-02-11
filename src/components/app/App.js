import './App.css';
import React from 'react';
import Logo from './../Logo/Logo.js';
import Navigation from './../Navigation/Navigation.js';
import Banner from './../Banner/Banner.js';
import Projects from './../Projects/Projects.js';
import ContactCard from './../ContactCard/ContactCard.js';
import Particles from 'react-tsparticles';



const App = () => {
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
              "opacity": 1,
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
            "speed": 40,
            "minimumValue": 0.1
          }
        }
      }
};

  ;

  return (
    <div className="App tc">
      <Particles className="particles" params={particleParams}/>
      <div className="Nav h-20 background">
        <Logo />
        <h1 className="glow neonText dim tc pl6">Ghost Code Sanctum</h1>
        <Navigation />
      </div>
      <Banner />
      <h1 className="glow neonText background"> Different Worlds Through Code</h1>
      <Projects />
      <h1 className="glow neonText background">Contact Our Leader Techmo!</h1>
      <ContactCard />
      </div>
  );
}

export default App;
