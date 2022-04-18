import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import ContactCard from  './components/ContactCard/ContactCard.js';
import Crew from './components/Crew/Crew.js';

const App = () => {

  return (
    <div className="App layer1 spacer">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/crew' element={<Crew />} />
        </Routes>
        <ContactCard />
      </Router>
    </div>
    );

}

export default App;
