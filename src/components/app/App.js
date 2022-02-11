import './App.css';
import Logo from './Images/CenterLogoGC.gif';
import NavLogo from './Images/NavLogoGC.png';
import React from 'react';
import Navigation from './../Navigation/Navigation.js';
import Particles from 'react-tsparticles';


const App = () => {
  const particleParams = {
      "background": {
        "color": {
          "value": "#0d47a1"
        },
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
      },
      "fullScreen": {
        "zIndex": 1
      },
      "interactivity": {
        "events": {
          "onClick": {
            "enable": true,
            "mode": "push"
          },
          "onHover": {
            "enable": true,
            "mode": "repulse",
            "parallax": {
              "force": 60
            }
          }
        },
        "modes": {
          "bubble": {
            "distance": 400,
            "duration": 2,
            "opacity": 0.8,
            "size": 40
          },
          "grab": {
            "distance": 400
          }
        }
      },
      "particles": {
        "color": {
          "value": "#ffffff"
        },
        "links": {
          "color": {
            "value": "#ffffff"
          },
          "distance": 150,
          "enable": true,
          "opacity": 0.4,
          "shadow": {
            "color": {
              "value": "#000000"
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
    <div className="App">
      <Particles className="particles" params={particleParams}/>
      <div className="Nav h-20 background">
        <img src={NavLogo} className="" style={{height: '100%', width: 'auto'}} />
        <div className="glow neonText dim pl6">Ghost Code Sanctum</div>
        <Navigation />
      </div>
      <div className="centerPiece_Component pointer"></div>
      <h1 className="glow neonText h-15 background"> About Us</h1>
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
      </div>
  );
}

export default App;
