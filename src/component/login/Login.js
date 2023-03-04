import React, { useState } from 'react';
import './Login';
import './login.css';

function Login() {
	// state to change diplay of landingpage
	const [show, setShow] = useState('Show');

	// states to change
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function showing() {
		setShow('noShow');
	}

	let token = {
		name: username,
		email: email,
		password_hash: password,
	};

	let loginToken = {
		email: email,
		password_hash: password,
	};

	const handleSubmit = () => {
		fetch('http://127.0.0.1:9292/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(token),
		});
	};

	function handleLogIn() {
		fetch('http://127.0.0.1:9292/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loginToken),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	}

	const [signup, setSignup] = useState(false);

	const switchLogin = () => {
		setSignup(!signup);
	};

	return (
		<div className={show}>
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
								showing();
								handleLogIn();
							}}
							className="formButton"
						>
							Sign Up
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
								showing();
								handleLogIn();
							}}
						>
							Sign In
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
