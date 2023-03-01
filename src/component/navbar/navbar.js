import React from "react";
import { AiOutlineLogin, AiOutlineUserAdd} from "react-icons/ai";
import {RiLoginCircleFill} from "react-icons/ri";
import {BiLogOutCircle} from "react-icons/bi"

function Navbar(){
    return(
        <div id="navbarDivs">
        <div> 
            <h2  className="logo">ME<span>+</span></h2>
        </div>
        <nav id="navbar" >
            
            <a href="#">HOME</a>
            <a href="#">PORTFOLIOS</a>
            <a href="#">ABOUT</a>
            <a href="#">ADD+</a>
            <div id="indicator"></div>     
        </nav>
        <div>
            {/* <p className="login"><span id="loginIcon"><AiOutlineLogin/></span></p> */}
            <p className="login"><span id="loginIcon"><AiOutlineUserAdd/></span></p>
            
        </div>

        <div>
            <p className="login"><span id="logoutIcon"><BiLogOutCircle/></span></p>
        </div>


        </div>
    )
}

export default Navbar;