import React, { useState } from 'react';

const Crew = () => {

	const [isShown, setIsShown] = useState(false);

	const SpaceFleetArrayOfObjects = [
		{
			rank: 'Commander',
			name: 'Derriel Collins',
			quote: `My crew is the most intellgent
			of all the universe we travel, discover
			and collect knowledge.`,
		},
		{
			rank: 'Lieutenant Commander',
			name: 'Dewayne Collins',
			quote: `The Commander is the greatest
			he always finds a way for us to get the job done....
			(innerThoughs)One Day...I shall be the true leader.`,
		},
		{			
			rank: 'Head of Operations',
			name: ' Techmo ',
			quote: `I am a Ghostly Bot that handles
			all of the Code...`,

		}
	] 

	const changeBackgroundColor = (e) => {
		
		e.target.style.background = "lightblue";
		e.target.style.fontFamily = "fantasy";
	}
	

	return (
		<div className="crew-component">
			<h1 className="glow neonText bg-light-green tc h-20 b--black-10">Our Ghostly StarFleet!</h1>
			<div className="tc Center h-30">
				<div onMouseEnter={()=> setIsShown(true)} 
					 onMouseLeave={()=> setIsShown(false)}
					 onMouseOver={changeBackgroundColor} 
					 id="div1" 
					 className="box bg-light-green br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20">
					 {SpaceFleetArrayOfObjects[0].rank}: 
					 {SpaceFleetArrayOfObjects[0].name}
					 {isShown &&  (
					 	<div>
					 	{SpaceFleetArrayOfObjects[0].quote}
					 	</div>
					 )}
				</div>
				<div onMouseEnter={()=> setIsShown(true)} 
					 onMouseLeave={()=> setIsShown(false)}
					 onMouseOver={changeBackgroundColor} 
					 id="div1" 
					 className="box bg-light-green br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20">
					 {SpaceFleetArrayOfObjects[1].rank}: 
					 {SpaceFleetArrayOfObjects[1].name}
					 {isShown &&  (
					 	<div>
					 	{SpaceFleetArrayOfObjects[1].quote}
					 	</div>
					 )}
				</div>
				<div onMouseEnter={()=> setIsShown(true)} 
					 onMouseLeave={()=> setIsShown(false)}
					 onMouseOver={changeBackgroundColor} 
					 id="div1" 
					 className="box bg-light-green br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20">
					 {SpaceFleetArrayOfObjects[2].rank}: 
					 {SpaceFleetArrayOfObjects[2].name}
					 {isShown &&  (
					 	<div>
					 	{SpaceFleetArrayOfObjects[2].quote}
					 	</div>
					 )}
				</div>

			</div>
		</div>
		);
}

export default Crew;