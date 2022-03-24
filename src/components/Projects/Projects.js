import React from 'react';
import ProjectsList from './ProjectsList.js';
import './Projects.css'


const Projects = ( {isHome, onRouteChange, Link, route} ) => {
	if (route === 'home') {
		return (										
		<div className="projectsGrid">
			<h1 className="glow neonText background">Discover What We Can Do For You! </h1>
			<div className="projects">
	        	<Link to="/projects" onClick={ ()=>onRouteChange('projects')} className="box bg-light-blue br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
	        		Online Shopping
	        	</Link>
	        	<Link to="/projects" onClick={ ()=>onRouteChange('projects')} className="box bg-light-green br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
	        		Directories
	        	</Link>
	        	<Link to="/projects" onClick={ ()=>onRouteChange('projects')} className="box bg-purple  br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
	        		Games and More...
	        	</Link>
	        	</div>
      	</div>
      	);
	} else {
	return (
		<div className="projectsGrid">
			<h1 className="glow neonText background">Different Worlds Through Code </h1>
			<div className="projects">
				{ProjectsList.projects.map((project)=>{
					return <a href={project.projectUrl} className="box bg-light-blue br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20">
								{project.projectName}
								<img src={process.env.PUBLIC_URL + project.imgUrl} alt="Project"/>
						   </a>;	
				})}       	   	
	      	</div>
      	</div>
		);

	}
}

export default Projects;