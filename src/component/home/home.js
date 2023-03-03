import React, {useEffect, useState} from "react";
import Navbar from "./login";
import ProjecItem from "../portfolio/projectitem" 
import PortfolioItem from "../portfolio/portfolioItem";
import UserItem from "../users/userItem";


function Home(){


    const [projects, setProjects] = useState([])



    useEffect( ()=>{
        fetch("http://127.0.0.1:9292/projects")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setProjects(data)
       
        })
    },[])


    function deleteProject(id){
        fetch(`http://127.0.0.1:9292//projects/destroy/${id}`,{
          method: "DELETE"
        })
        .then(()=>{
            setProjects((prof) => prof.filter((it) => it.id !== id))
        })
    }




    return(
        <>
        <div>
            <Navbar />

            <div className="registration">
            <div className="r-container">
                    <div className="r-left">
                    <p className="r-title">Bio</p>

                    <PortfolioItem/>


                 </div>
            </div>

            <div className="r2-container">
                <div className="r-right"></div>    
                <div className="flex-container">
                   
                    {projects.map((value)=><ProjecItem title={value.title} description={value.description} key={value.id} id={value.id} deleteProject={deleteProject}/>)}

                    <UserItem/>

                </div>
            </div>
        </div>        

            

        </div>
        </>
    )
}

export default Home;