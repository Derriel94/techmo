import React from 'react';

const Navbar = ( {Link, onRouteChange} ) => {


	return (
		<div className="nav-bar">
			<Link onClick={ ()=>onRouteChange('home')} to="/" className="glow neonText"> Home </Link>
			<Link onClick={ ()=>onRouteChange('projects')} to="/projects" className="glow neonText"> Projects </Link>
			<Link onClick={ ()=>onRouteChange('crew')} to="/crew" className="glow neonText"> Crew </Link>
		</div>
		);

}

export default Navbar;