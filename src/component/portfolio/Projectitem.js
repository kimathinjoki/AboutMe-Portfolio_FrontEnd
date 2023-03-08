import React from 'react'
import {MdOutlineDeleteSweep} from "react-icons/md"

export default function ProjectItem({title,description,id, deleteProject, status}) {




  return (
    <div key={id}>

        <div key={id} className="projects-card">
                <p className="project-title">{title}</p>
                <p classname="project_description">{description}</p>
                <h4>{status}</h4>
                <button onClick={()=> deleteProject(id)}><MdOutlineDeleteSweep/></button>
                {/* <button key={id} onClick={()=> deleteProject(id)}><ion-icon name="trash-outline"></ion-icon></button> */}
                
        </div> 
      
    </div>
  )
}