import React from "react";
import ProjectItem from "./Projectitem";


function Projects({projects, deleteProject}){
    return(
        <div>
            		<div className="cont content-container-right">
						
						{projects.map((value)=><ProjectItem title={value.title} description={value.description} id={value.id} deleteProject={deleteProject} status={value.status}/>)}

					</div>
        </div>
    )
}

export default Projects;