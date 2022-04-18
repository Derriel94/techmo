import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ( ) => {


	return (
		<div className="nav-bar">
			<div id="white"><Link to="/" className="glow neonText" style={{ textDecoration: 'none', color: 'black' }}> Home </Link></div>
			<div id="white"><Link to="/projects" className="glow neonText" style={{ textDecoration: 'none', color: 'black' }}> Projects </Link></div>
			<div id="white"><Link to="/crew" className="glow neonText" style={{ textDecoration: 'none', color: 'black' }}> Crew </Link></div>
		</div>
		);

}

export default Navbar;