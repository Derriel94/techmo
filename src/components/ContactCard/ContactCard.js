import React from 'react';

const ContactCard = () => {
	const ContactCard = './../Logo/Images/NavLogoGC.png';
	return (
			<div className="tc mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
				<img src={ContactCard} className="br-100 h3 w3 dib" alt="Derriel Collins" />	
				<h1 className="f4">Derriel "Techmo" Collins</h1>
				<p className="lh-copy measure center f6 black-70">Phone Number: 4698918404</p>
				<p className="lh-copy measure center f6 black-70">Email Address: derrielcollins96@gmail.com</p>
				<p className="lh-copy measure center f6 black-70">GitHub: github.com/derriel94</p>
			</div>
		);
}

export default ContactCard;