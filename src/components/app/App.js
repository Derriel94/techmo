import './App.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


function App() {
  const [state, toggle] = useState(true);
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } });
  return (
    <div class="background">
      
      <div onClick={() => toggle(!state)}>
      <animated.div
        style={{
     fontSize: 50,
        }}>
        <h1 class="title">TechMo</h1>
      </animated.div>
    </div>
    </div>
  );
}

export default App;
