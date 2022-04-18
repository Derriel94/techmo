import React from 'react';
import ProjectsList from './ProjectsList.js';
import './Projects.css'


const Projects = () => {
	return (
		<div className="projectsGrid">
			<h1 className="neonText">Different Worlds Through Code </h1>
			<div className="black projects">
				{ProjectsList.projects.map((project)=>{
					return <a href={project.projectUrl} className="box bg-light-blue br3 pa3">
								{project.projectName}
								<img className="project-img" src={process.env.PUBLIC_URL + project.imgUrl} alt="Project"/>
						   </a>;	
				})}       	   	
	      	</div>
      	</div>
		);
}

export default Projects;