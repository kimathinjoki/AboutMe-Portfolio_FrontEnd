import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
// import { AiOutlineLogin, AiOutlineUserAdd} from "react-icons/ai";
// import { BiLogOutCircle } from 'react-icons/bi';
import Form from '../form/Form';

function Navbar() {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);

	return (
		<div id="navbarDivs">
			<nav id="navbar">
				<Link className="navbar" to="/home">
					HOME
				</Link>
				<Link className="navbar" to="/projects">
					PROJECTS
				</Link>
				{/* <Link className="navbar add-project" onClick={handleShow} to="#">
					ADD+
				</Link> */}
				{/* <a href="#"><Link className='navbar' to="/add"><AiOutlineUserAdd/></Link></a> */}
				<Form/>
				
				<div id="indicator"></div>
			</nav>
			<div>
				{/* <p className="login"><span id="logoutIcon"><BiLogOutCircle/></span></p> */}
			</div>
		</div>
	);
}

export default Navbar;