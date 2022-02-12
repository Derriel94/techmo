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

  const ProjectListArray = [ 
    {id:[0], projectTitle: ['World of Code'], url: ['ghostcode.com']},
    {id:[1], projectTitle: ['Flight Game'], url: ['ghostcode.com']},
    {id:[2], projectTitle: ['Egypt Facts Directory'], url:['ghostcode.com']},
    {id:[3], projectTitle: ['Bowling Game'], url: ['ghostcode.com']},
    {id:[4], projectTitle: ['Smart Brain Ui'], url: ['ghostcode.com']},
    {id:[5], projectTitle: ['MaxxHp'], url: ['ghostcode.com']},
    {id:[6], projectTitle: ['WorldofCode'], url: ['ghostcode.com']},
    {id:[7], projectTitle: ['Woe'], url: ['ghostcode.com']},
    {id:[8], projectTitle: ['WorCode'], url: ['ghostcode.com']},
    {id:[9], projectTitle: ['dode'], url: ['ghostcode.com']},
  ];

  const [route, setRoute] = useState('home');
  const [isHome, setIsHome] = useState(true);
  // const [projectList, setProjectList] = useState( ProjectListArray );

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
          <h1 className="glow neonText dim tc pl6">Ghost Code Sanctum</h1>
          <Navigation isHome={isHome} onRouteChange={onRouteChange} />
        </div>
        { route === 'home'
          ? <div>
              <Banner />           
              <Projects onRouteChange={onRouteChange} isHome={isHome} />
              <ContactCard />  
            </div>
          : <div>
            <Banner />
              <Projects isHome={isHome} projectList={ProjectListArray} />
            </div>  
        }
        <div className="footer" style={{display: 'flex', justifyContent: 'center'}}>
          <ul>
            <li className="f3 underline">Services</li>
            <li className="pt2">Web Design</li>
            <li className="pt2">Graphic Design</li>
            <li className="pt2">SoftwareEngineer</li>
            <li className="pt2">Marketing And Consulting</li>
          </ul>
        </div>
    </div>
  );
}

export default App;
