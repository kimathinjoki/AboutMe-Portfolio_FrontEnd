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


	// const [show, setShow] = useState('Show');
	// const [homeShow, setHomeShow] = useState("noShowHome")


	// states to change
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// sets the id 
	const [logedUserId, setLogedUserId] =useState(0)

	// sets if the login is succesfull or not

	const [allow, setAllow] = useState("")
	const [failedLogInMsg, setFailedLogInMsg] =  useState("noMsg")

	// sets a users skills
	const [skills, setSkills] = useState([])
	
	
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
		fetch('http://127.0.0.1:9292/signin', {
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
				setLogedUserId(data.id)
				console.log(logedUserId)
				setUsername(data.name)

				// gotProjects(data.id)


			});
	}

	const handleSignUp = () => {
		fetch('http://127.0.0.1:9292/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(token),
		})
		.then(res => res.json())
		.then((data) => {
			console.log(data);
			setAllow(data.message)
			setLogedUserId(data.id)

		})

	};



	useEffect(() => {
		fetch('http://127.0.0.1:9292/projects')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProjects(data);
			});
	}, []);

	function deleteProject(id) {
		fetch(`http://127.0.0.1:9292//projects/destroy/${id}`, {
			method: 'DELETE',
		}).then(() => {
			setProjects((prof) => prof.filter((it) => it.id !== id));
		});
	}





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
					<LandingPage handleLogIn={handleLogIn} handleSignUp={handleSignUp} username={username} email={email} password={password} setPassword={setPassword} setEmail={setEmail} setUsername={setUsername} failedLogInMsg={failedLogInMsg}  allow={allow} />
				</Route>
				<Route path="/home">
					<Home skills={skills} username={username} email={email} deleteProject={deleteProject} loggedUserId={logedUserId} projects={projects}/>
				</Route>
				<Route path="/add">
					<Form />
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
