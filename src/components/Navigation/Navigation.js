import React from 'react';

const Navigation = ( {isHome, onRouteChange} ) => {

	if (isHome) {
		return (
			<nav onClick={ ()=>onRouteChange('projects')} className="neonText underline">
				<p> Creator: Derriel Collins </p>
				<p className="pt1 pointer"> Projects </p>
			</nav>

			);
	} else {
		return (
			<nav onClick={ ()=>onRouteChange('home')} className="neonText underline">
				<p> Creator: Derriel Collins </p>
				<p className="pt1 pointer"> Home </p>
			</nav>
		);
	}
	
}

export default Navigation;