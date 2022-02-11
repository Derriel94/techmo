import React from 'react';

const Navigation = (isHome) => {

	if (isHome) {
		return (
			<nav className="neonText underline">
				<p> Creator: Derriel Collins </p>
				<p className="pt1 pointer"> Projects </p>
			</nav>

			);
	} else {
		return (
			<nav className="neonText underline">
				<p> Creator: Derriel Collins </p>
				<p className="pt1 pointer"> Home </p>
			</nav>
		);
	}
	
}

export default Navigation;