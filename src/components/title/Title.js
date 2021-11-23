import './Title.css';
import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';


function RainbowTitle(props) {
  const [flip, set] = useState(false); 
  let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  const front = useSpring({ to: { fontSize: 20 ,opacity: 1, color: randomColor}, from: { opacity: 0.5, color: randomColor}, config: config.molasses, delay: 200, reset: true, reverse: flip, onRest: () => set(!flip)});
  const randomizeEachLetter = (raintitle) => {
    props.title = raintitle;
          for (let i = 0; i < raintitle.length; i++) {
           <animated.div style={front}> raintitle[i] </animated.div>
      }
  }
  return (
    <div className="app">
      <animated.div style={front}>{props.bigtitle}</animated.div>
      <div>{randomizeEachLetter}</div>
    </div>
  );
}

export default RainbowTitle;
