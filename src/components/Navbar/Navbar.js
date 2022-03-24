import React from 'react';

const Navbar = ( {Link} ) => {


	return (
		<div className="nav-bar">
			<Link to="/" className="glow neonText"> Home </Link>
			<Link to="/projects" className="glow neonText"> Projects </Link>
			<Link to="/crew" className="glow neonText"> Crew </Link>
		</div>
		);

}

export default Navbar;