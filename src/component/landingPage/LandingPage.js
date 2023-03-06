import React from 'react';
import Login from '../login/Login';
import './landing_page.css';
// import { AiOutlineUserAdd } from 'react-icons/ai';

function LandingPage({handleLogIn, handleSignUp, username, password, email, setPassword, setEmail, setUsername, failedLogInMsg, allow}) {








	return (
		<div>

			<Login handleLogIn={handleLogIn} handleSignUp={handleSignUp} username={username} email={email} password={password} setPassword={setPassword} setEmail={setEmail} setUsername={setUsername} failedLogInMsg={failedLogInMsg} allow={allow}/>

		</div>
	);
}

export default LandingPage;
