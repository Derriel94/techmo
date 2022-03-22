import './App.css';
import React, { useState } from 'react';
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


const projectsArray = [
  {
    id: '0',
    projectName: 'GhostCodeSite',
    projectUrl: 'localhost:3000',
    imgUrl: './Images/ghostcodeimg.PNG'
  },
  {
    id: '1',
    projectName: 'Smart_brain',
    projectUrl: 'https://smart-brain-cli.herokuapp.com/',
    imgUrl: './Images/smartbrainimg.PNG'
  },
  {
    id: '2',
    projectName: 'Techmo News Letter',
    projectUrl: 'localhost:3000'
  },
    {
    id: '3',
    projectName: 'Playlist Component (Jamming)',
    projectUrl: 'https://smart-brain-cli.herokuapp.com/',
    imgUrl: './Images/smartbrainimg.PNG'
  },
  {
    id: '4',
    projectName: 'MaxxHp Landing Page',
    projectUrl: 'https://smart-brain-cli.herokuapp.com/',
    imgUrl: './Images/smartbrainimg.PNG'
  },
    {
    id: '5',
    projectName: 'Books Are Us Landing Page',
    projectUrl: 'https://smart-brain-cli.herokuapp.com/',
    imgUrl: './Images/smartbrainimg.PNG'
  },
  {
    id: '6',
    projectName: 'This Is the Mall!!! Logo',
    projectUrl: 'https://smart-brain-cli.herokuapp.com/',
    imgUrl: './Images/smartbrainimg.PNG'
  }
];

  const [route, setRoute] = useState('home');
  const [isHome, setIsHome] = useState(true);


  const onRouteChange = (route) => {
      setRoute(route);
      if (route === 'home') {
        setIsHome(true);
      } else {
        setIsHome(false);
      }
  };

  return (
    <div className="App tc">
      <Particles className="particles" params={particleParams}/>
        <div className="Nav h-20 background">
          <Logo />
          <h1 className="glow neonText dim tc">Ghost Code Sanctum</h1>
          <Navigation isHome={isHome} onRouteChange={onRouteChange} />
        </div>
        { route === 'home'
          ? <div>
              <Banner />           
              <Projects onRouteChange={onRouteChange} isHome={isHome} />
              <ContactCard />
              <div className="background footer">
                <div className="glow neonText dim f3 underline">Services</div>
                <div className="glow neonText dim tc">Web Design</div>
                <div className="glow neonText dim tc">Graphic Design</div>
                <div className="glow neonText dim tc">SoftwareEngineer</div>
                <div className="glow neonText dim tc">Marketing And Consulting</div>
              </div>
            </div>
          : <div>
              <Banner />
              <Projects isHome={isHome} projectsArray={projectsArray} />
              <ContactCard /> 
              <div className="background footer">
                <h1 className="glow neonText dim f3 underline">Services</h1>
                <h1 className="glow neonText dim tc ">Web Design</h1>
                <h1 className="glow neonText dim tc ">Graphic Design</h1>
                <h1 className="glow neonText dim tc ">SoftwareEngineer</h1>
                <h1 className="glow neonText dim tc ">Marketing And Consulting</h1>
              </div>
            </div>  
        }
    </div>
  );
}

export default App;
