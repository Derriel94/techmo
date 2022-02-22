import React from 'react';
import './Projects.css'


const Projects = ( {isHome, onRouteChange, projectsArray} ) => {
	if (isHome) {
		return (
		<div className="projectsGrid">
			<h1 className="glow neonText background"> Different Worlds Through Code</h1>
			<div className="projects">
	        	<div onClick={ ()=>onRouteChange('projects')} className="box bg-light-blue br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
	        		Online Shopping
	        	</div>
	        	<div onClick={ ()=>onRouteChange('projects')} className="box bg-light-green br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
	        		Directories
	        	</div>
	        	<div onClick={ ()=>onRouteChange('projects')} className="box bg-purple  br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
	        		Games and More...
	        	</div>
	        	</div>
      	</div>
      	);
	} else {
	return (
		<div className="projectsGrid">
			<h1 className="glow neonText background"> Different Worlds Through Code</h1>
			<div className="projects">
				{projectsArray.map((project)=>{
					return <div className="box bg-light-blue br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20">{project.projectName}</div>;	
				})}       	   	
	      	</div>
      	</div>
		);

	}
}

export default Projects;