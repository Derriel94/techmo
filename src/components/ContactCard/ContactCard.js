import React from 'react';
import './ContactCard.css' ;
const ContactCard = () => {
	
	return (
		<div className="contactCard layer1">
			<h1 className="title neonText">Contact Our Leader Techmo!</h1>
			<div className="black">
			<div className="tc mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
				<img src="./me.jpg" className="br-100 h4 w4 dib" alt="Derriel Collins" />	
				<h1 className="f4">Derriel "Techmo" Collins</h1>
				<p className="lh-copy measure center f6 black-70">Phone Number: 4698918404</p>
				<p className="lh-copy measure center f6 black-70">Email Address: derrielcollins96@gmail.com</p>
				<p className="lh-copy measure center f6 black-70">GitHub: github.com/derriel94</p>
			</div>
			</div>
		</div>
		);
}

export default ContactCard;