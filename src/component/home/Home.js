import React, { useEffect, useState } from 'react';
import ProjectItem from '../portfolio/Projectitem';
import PortfolioItem from '../portfolio/PortfolioItem';
import UserItem from '../users/UserItem';
import Navbar from '../navbar/Navbar';
import Login from '../login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Projects from '../portfolio/Projects';



import './home.css';
import Form from '../form/Form';
import {BiLogOutCircle} from "react-icons/bi"



function Home({id, projects, setProjects}) {

	// const [projects, setProjects] = useState([]);


	// const [show, setShow] = useState('Show');
	// const [homeShow, setHomeShow] = useState("noShowHome")


	// // states to change
	// const [username, setUsername] = useState('');
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	// // sets the id 
	// const [logedUserId, setLogedUserId] =useState(0)

	// // sets if the login is succesfull or not

	// const [allow, setAllow] = useState("")
	// const [failedLogInMsg, setFailedLogInMsg] =  useState("noMsg")

	// sets a users skills
	
	
	
	// 	let token = {
	// 		name: username,
	// 		email: email,
	// 		password_hash: password,
	// 	};
	
	// 	let loginToken = {
	// 		email: email,
	// 		password_hash: password,
	// 	};




		// gets the projects of a user

		// function gotProjects(dt){
		// 	fetch(`http://127.0.0.1:9292/projects/${dt}`, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //         })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             console.log(data);
        //             setProjects(data)
        //         })
		// }
	
		// const handleSignUp = () => {
		// 	fetch('http://127.0.0.1:9292/signup', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(token),
		// 	})
		// 	.then(res => res.json())
		// 	.then((data) => {
        //         console.log(data);
		// 		setAllow(data.message)
		// 		setLogedUserId(data.id)
		// 	})

		// };


	
		// function handleLogIn() {
		// 	fetch('http://127.0.0.1:9292/signin', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(loginToken),
		// 	})
		// 		.then((res) => res.json())
		// 		.then((data) => {
		// 			console.log(data);
		// 			setAllow(data.message)
		// 			setLogedUserId(data.id)
		// 			console.log(logedUserId)
		// 			setUsername(data.name)

		// 			// gotSkills(data.id)
		// 			// gotProjects(data.id)


		// 		});
				// setEmail('')
				// setPassword('')

	


				
			
				
			
		// }



		// fetching a user skills

		// useEffect(()=>{
		// 			fetch(`http://127.0.0.1:9292/skills/${dt}`, {
		// 				method: 'GET',
		// 				headers: {
		// 						'Content-Type': 'application/json',
		// 						}
		// 						})
		// 						.then((res) => res.json())
		// 							.then((data) => {
		// 							console.log(data);
		// 							setSkills(data)
		// 				})
					
							
			
		// })
		
	

		

	// function showing() {
	// 	if (allow === "SUCCESS"){
	// 		setShow('noShow');
	// 		setHomeShow('homeShow')
	// 	}else{
	// 		// setShow('Show');
    //         // setHomeShow('noShowHome')
	// 		setFailedLogInMsg("msg")
	// 	}
	// }


	function deleteProject(id) {
		fetch(`https://backendportfolio-9ejn.onrender.com/projects/destroy/${id}`, {
			method: 'DELETE',
		}).then(() => {
			setProjects((prof) => prof.filter((it) => it.id !== id));
		});
	}


	return (
		<div>
			{/* <Login show={show} showing={showing} handleLogIn={handleLogIn} handleSignUp={handleSignUp} username={username} email={email} password={password} setPassword={setPassword} setEmail={setEmail} setUsername={setUsername} failedLogInMsg={failedLogInMsg}/> */}
			<div >
			<div className="home">
			<div className="home-container">
				<Link className="logOut" to="/"><BiLogOutCircle/></Link>
				<Navbar />
				<div className="content-container">
					<div className="cont content-container-left">
						<PortfolioItem id={id} />
					</div>
					<div className="cont content-container-right">
						
						{projects.map((value)=><ProjectItem title={value.title} description={value.description} id={value.id} deleteProject={deleteProject} status={value.status}/>)}

			
					 </div> 


					{/* <Route path="/prrojects">
					<Projects  deleteProject={deleteProject} projects={projects}/>
					</Route>  */}

					
				</div>
			</div>
		</div>
			
		</div>
	</div>
	);
}

export default Home;
