Limport React from "react";
import { Link } from'react-router-dom'
import './navbar'
import { AiOutlineLogin, AiOutlineUserAdd} from "react-icons/ai";
import {BiLogOutCircle} from "react-icons/bi"

function Navbar(){
    return(
        <div id="navbarDivs">
        <div> 
            <h2  className="logo">ME<span>+</span></h2>
        </div>
        <nav id="navbar" >
            
            <a href="#"><Link className='navbar' to="/">HOME</Link></a>
            <a href="#"><Link className='navbar' to="/projects">PROJECTS</Link></a>
            <a href="#"><Link className='navbar' to="/add">ADD+</Link></a>
            <a href="#"><Link className='navbar' to="/add"><AiOutlineUserAdd/></Link></a>
            <div id="indicator"></div>     
        </nav>
        <div>
            <p className="login"><span id="logoutIcon"><BiLogOutCircle/></span></p>
        </div>


        </div>
    )
}

export default Navbar;