import React from 'react';
import Login from '../login/Login';
import './landing_page.css';
// import { AiOutlineUserAdd } from 'react-icons/ai';

function LandingPage() {
	return (
		<div>
			<div className="logo-div">
				<h1 className="logo">
					ME<span>+</span>
				</h1>
			</div>

			<div>
				{/* <p className="login"><span id="loginIcon"><AiOutlineLogin/></span></p> */}
				<p className="login">
					{/* <span id="loginIcon"><AiOutlineUserAdd /></span> */}
				</p>
			</div>

			<Login />
		</div>
	);
}

export default LandingPage;
