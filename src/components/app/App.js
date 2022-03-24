import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './../Home/Home.js';
import Projects from './../Projects/Projects.js';
import Crew from './../Crew/Crew.js';

const App = () => {

  const [route, setRoute] = useState('home');
  const [isHome, setIsHome] = useState(true);
  const onRouteChange = (route) => {
      setRoute(route);
      if (route === 'home') {
        setIsHome(true);
      } else if (route === "projects") {
        setIsHome(false);
      } else if (route === "crew") {
        setIsHome(false);
      }
      route.preventDefault();
  };

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home isHome={isHome} onRouteChange={onRouteChange} />}>
          <Route path="/projects" element={<Projects />} />
          <Route path='/crew' element={<Crew />} />
        </Route>
      </Routes>
    </Router>
    );

}

export default App;
