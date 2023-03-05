import React, { useEffect, useState } from 'react';
import ProjectItem from '../portfolio/Projectitem';
import PortfolioItem from '../portfolio/PortfolioItem';
import UserItem from '../users/UserItem';
import Navbar from '../navbar/Navbar';
import Login from '../login/Login';
import './home.css';
import Form from '../form/Form';
import {BiLogOutCircle} from "react-icons/bi"



function Home() {

	const [projects, setProjects] = useState([]);

	
	const [show, setShow] = useState('Show');
	const [homeShow, setHomeShow] = useState("noShowHome")


	// states to change
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// sets the id 
	const [logedUserId, setLogedUserId] =useState(0)

	// sets if the login is succesfull or not

	const [allow, setAllow] = useState("")
	const [failedLogInMsg, setFailedLogInMsg] =  useState("noMsg")
	
	
		let token = {
			name: username,
			email: email,
			password_hash: password,
		};
	
		let loginToken = {
			email: email,
			password_hash: password,
		};
	
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
            });
		};
	
		function handleLogIn() {
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
				});
		}


	function showing() {
		if (allow === "SUCCESS"){
			setShow('noShow');
			setHomeShow('homeShow')
		}else{
			setShow('Show');
            setHomeShow('noShowHome')
			setFailedLogInMsg("msg")
		}
	}


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
			<Login show={show} showing={showing} handleLogIn={handleLogIn} handleSignUp={handleSignUp} username={username} email={email} password={password} setPassword={setPassword} setEmail={setEmail} setUsername={setUsername} failedLogInMsg={failedLogInMsg}/>
			<div className={homeShow}>
			<div className="home">
			<div className="home-container">
				<div><BiLogOutCircle/></div>
				<Navbar />
				<div className="content-container">
					<div className="cont content-container-left">
						<PortfolioItem />
					</div>
					<div className="cont content-container-right">
						{/* <UserItem /> */}
						<ProjectItem />
						{/* <div className="form">
							<form action>
								<div className="form-section">
									<input type="text" placeholder="title" />
								</div>
								<div className="form-section">
									<textarea type="text" placeholder="description" />
								</div>
								<button>Add Project</button>
							</form>
						</div> */}
					</div>

					{/* <div className="r-container">
						<div className="r-left">
							<p className="r-title">Bio</p>
						</div>
					</div> */}
					{/* <div className="r2-container">
						<div className="r-right"></div>
						<div className="flex-container">
							{projects.map((value) => (
								<ProjectItem
									title={value.title}
									description={value.description}
									key={value.id}
									id={value.id}
									deleteProject={deleteProject}
								/>
							))}
						</div>
					</div> */}
				</div>
			</div>
		</div>
			
		</div>
	</div>
	);
}

export default Home;
