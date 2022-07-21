import React from 'react';
import ProjectsList from './ProjectsList.js';
import './Projects.css'


const Projects = () => {
	return (
		<div className="projectsGrid">
			<div className="black projects">
				{ProjectsList.projects.map((project)=>{
					return <div>
					<a href={project.projectUrl} className="project-img project-name box br3 pa3">
								<h2>{project.projectName}</h2>
								<img className="" src={process.env.PUBLIC_URL + project.imgUrl} alt="Project"/>
						   </a>
						   </div>;	
				})}       	   	
	      	</div>
      	</div>
		);
}

export default Projects;