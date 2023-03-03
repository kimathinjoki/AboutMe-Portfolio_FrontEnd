import React from "react";
import Login from "../home/login";
import {RiLoginCircleFill} from "react-icons/ri";


function LandingPage(){
    return(
        <>
        
        <h2  className="logo">ME<span>+</span></h2>

        <div>
            {/* <p className="login"><span id="loginIcon"><AiOutlineLogin/></span></p> */}
            <p className="login"><span id="loginIcon"><AiOutlineUserAdd/></span></p>    
        </div>

        <Login/>

        </>
    )
}

export default LandingPage;