import React, { useState } from 'react';
import './Login';
import './login.css';
import { Link } from 'react-router-dom';

function Login({allow, handleLogIn, handleSignUp, password, email, username, setEmail, setUsername, setPassword}) {
		

	const [show, setShow] = useState();


	const [failedLogInMsg, setFailedLogInMsg] =  useState("noMsg")

	function showing() {
		if (allow === "SUCCESS"){
			setShow(<Link className="formButton" to="/home"></Link>);
			// setHomeShow('homeShow')
		}else{
			// setShow('Show');
            // setHomeShow('noShowHome')
			setFailedLogInMsg("msg")
		}
	}


// state to change diplay of landingpage
	const [signup, setSignup] = useState(false);

	const switchLogin = () => {
		setSignup(!signup);
	};

	return (
		<div className="">
			<div
				className={`loginRegister container ${
					signup ? 'right-panel-active' : ''
				}`}
				id="container"
			>
				<div className="form-container sign-up-container">
					<form
						className="loginForm"
						action="#"
						onSubmit={(e) => e.preventDefault()}
					>
						<h1 className="headerh1">Create Account</h1>
						<div className="social-container"></div>
						<span className="formSpan">or use your email for registration</span>
						<input
							className="loginInput"
							type="text"
							value={username}
							onChange={(e) => {
								e.preventDefault();
								setUsername(e.target.value);
							}}
							placeholder="Name"
						/>
						<input
							className="loginInput"
							type="email"
							value={email}
							onChange={(e) => {
								e.preventDefault();
								setEmail(e.target.value);
							}}
							placeholder="Email"
						/>
						<input
							className="loginInput"
							type="password"
							value={password}
							onChange={(e) => {
								e.preventDefault();
								setPassword(e.target.value);
							}}
							placeholder="Password"
						/>
						<button
							onClick={(e) => {
								e.preventDefault();
								handleSignUp();
								showing();
							}}
							className="formButton"
						>
							{show}<span>sign up</span>
						
						</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form
						className="loginForm"
						action="#"
						onSubmit={(e) => e.preventDefault()}
					>
						<h1 className="headerh1">Sign in</h1>
						<div className="social-container">
							{/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
						</div>
						<span className="formSpan">or use your account</span>
						<span className={`formSpan ${failedLogInMsg}`}>wrong password or email</span>
						<input
							className="loginInput"
							type="email"
							value={email}
							onChange={(e) => {
								e.preventDefault();
								setEmail(e.target.value);
							}}
							placeholder="Email"
						/>
						<input
							className="loginInput"
							type="password"
							value={password}
							onChange={(e) => {
								e.preventDefault();
								setPassword(e.target.value);
							}}
							placeholder="Password"
						/>
						<a id="formA" href="#">
							Forgot your password?
						</a>
						<button
							className="formButton"
							onClick={(e) => {
								e.preventDefault();
								handleLogIn();
								showing();
								
							}}
						>
							{show}<span >sign in</span>
						</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1 className="headerh1">Welcome Back!</h1>
							<p className="formP">
								To keep connected with us please login with your personal info
							</p>
							<button className="ghost formButton" id="signIn" onClick={switchLogin}>
								Sign In
							</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1 className="headerh1">Hello, Friend!</h1>
							<p className="formP">
								Enter your personal details and start journey with us
							</p>
							<button
								className="ghost formButton"
								id="signUp"
								onClick={switchLogin}
	
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
