import React, {useEffect, useState} from 'react';
import './Projects.css'

const Projects = ( {isHome, onRouteChange, projectList} ) => {
	const [data, setData]= useState([]);

	const getData = () => {
		fetch('http://localhost:3001/projects',{
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then((response)=>{
			console.log(response)
			return response.json();
		})
		.then((myJson)=>{
			console.log(myJson);
			setData(myJson)
			
		})
	}


	useEffect(()=> {
		getData()

	},[])

	if (isHome) {
		return (
		<div>
			<h1 className="glow neonText background"> Different Worlds Through Code</h1>
			<div className="projects" style={{display: 'flex', justifyContent: 'space-around'}}>
	        	<div onClick={ ()=>onRouteChange('projects')} className="box bg-light-blue br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
	        		<h1>Online Shopping</h1>
	        	</div>
	        	<div onClick={ ()=>onRouteChange('projects')} className="box bg-light-green br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
	        		<h1>Directories</h1>
	        	</div>
	        	<div onClick={ ()=>onRouteChange('projects')} className="box bg-purple  br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20 pointer" >
	        		<h1>Games and More...</h1>
	        	</div>
	        	</div>
      	</div>
      	);
	} else {
	return (
		<div>
		{console.log(data)}
			<h1 className="glow neonText background"> Different Worlds Through Code</h1>
			<div className="projects" style={{display: 'flex', justifyContent: 'space-around'}}>
				{data.map((project)=>{
					return <div className="box bg-light-blue br3 pa3 pa4-ns mv3 ba b--black-10 h5 w-20">{project.projectName}</div>;	
				})}       	   	
	      	</div>
      	</div>
		);

	}
}

export default Projects;