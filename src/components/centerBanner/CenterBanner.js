import './CenterBanner.css';
import React, { useState, useRef } from 'react';
import { useFrame } from "@react-three/fiber";

function CenterBanner(props) {
	
	const mesh = useRef(null);

	const [hovered, setHover] =  useState(false);
	// const [active, setActive] = useState(false);

	useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

	return(
		<mesh
			{...props}
	      	ref={mesh}
	      	// scale={active ? 2 : 1}
	      	// onClick={(event) => setActive(!active)}
	      	onPointerOver={(event) => setHover(true)}
	      	onPointerOut={(event) => setHover(false)}>
	      	<sphereGeometry args={[15, 32, 16]} />
	      	<meshStandardMaterial color ={hovered ? 'hotpink' : 'orange'} />

		</mesh>

	);
}


export default CenterBanner;
