import './App.css';
// import LandingPage from './component/landingPage/LandingPage';
import React, {useState, useEffect} from 'react';
import Home from './component/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './component/404page/NotFound';
import Form from './component/form/Form';
import LandingPage from './component/landingPage/LandingPage';

function App(){


	const [projects, setProjects] = useState([]);


	// states to change
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// sets the id 
	const [id, setId] =useState(4)

	// sets if the login is succesfull or not

	const [allow, setAllow] = useState("")
	
	


	
		let token = {
			name: username,
			email: email,
			password_hash: password,
		};
	
		let loginToken = {
			email: email,
			password_hash: password,
		};






	function handleLogIn(){
		fetch('https://backendportfolio-9ejn.onrender.com/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loginToken),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAllow(data.message)
				setId(data.data.id)
				setUsername(data.data.name)
				console.log(data.message)
				console.log(data.data.name)
				console.log(data.data.email)
				console.log(data.data.id)
				

				// gotProjects(data.id)


			});
	}

	const handleSignUp = () => {
		fetch('https://backendportfolio-9ejn.onrender.com/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(token),
		})
		.then(res => res.json())
		.then((data) => {
			console.log(data);
			console.log(data.data.id)
			setAllow(data.message)
			setId(data.data.id)
			console.log(data.message)
			console.log(id)

		})

	};



	useEffect(() => {
		fetch('https://backendportfolio-9ejn.onrender.com/projects')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProjects(data);
			});
	}, []);







	return (
		<div>
			<div className="logo-div">
				<h1 className="logo">
					ME<span>+</span>
				</h1>
			</div>
		<Router>
			<Switch>
				<Route exact path="/">
					<LandingPage handleLogIn={handleLogIn} handleSignUp={handleSignUp} username={username} email={email} password={password} setPassword={setPassword} setEmail={setEmail} setUsername={setUsername} allow={allow}  />
				</Route>
				<Route path="/home">
					<Home id={id} projects={projects} />
				</Route>
				<Route path="/projects">
					<Home id={id} projects={projects} />
				</Route>
				<Route path="/add">
					<Form setProjects={setProjects} projects={projects} id={id} />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
		</div>
	);
}

export default App;
