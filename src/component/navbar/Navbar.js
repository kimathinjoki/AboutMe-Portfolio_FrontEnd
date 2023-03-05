import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
// import { AiOutlineLogin, AiOutlineUserAdd} from "react-icons/ai";
import { BiLogOutCircle } from 'react-icons/bi';

function Navbar() {
	// const [first, setfirst] = useState(second)
	const handleAddProject = () => {};

	return (
		<div id="navbarDivs">
			<nav id="navbar">
				<Link className="navbar" to="/">
					HOME
				</Link>
				<Link className="navbar" to="/projects">
					PROJECTS
				</Link>
				<Link className="navbar add-project" onClick={handleAddProject} to="#">
					ADD+
				</Link>
				{/* <a href="#"><Link className='navbar' to="/add"><AiOutlineUserAdd/></Link></a> */}
				<div id="indicator"></div>
			</nav>
			<div>
				{/* <p className="login"><span id="logoutIcon"><BiLogOutCircle/></span></p> */}
			</div>
		</div>
	);
}

export default Navbar;
