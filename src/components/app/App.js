import './App.css';
import Logo from './Images/CenterLogoGC.gif';
import NavLogo from './Images/NavLogoGC.png';
import React from 'react';
import Navigation from './../Navigation/Navigation.js';
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
              "value": "#000000",
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
      <h1 className="glow neonText h-15 background"> Different Worlds Through Code</h1>
      <div className="home_projects" style={{display: 'flex', justifyContent: 'space-around'}}>
        <div className="box bg-light-blue br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20" >

        </div>
        <div className="box bg-light-green br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20" >

        </div>
        <div className="box bg-purple  br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20" >

        </div>
      </div>
        <h1 className="title background"> Contact Me</h1>
      </div>
  );
}

export default App;
