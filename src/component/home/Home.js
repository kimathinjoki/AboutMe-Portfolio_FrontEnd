import React, { useEffect, useState } from 'react';
import ProjectItem from '../portfolio/Projectitem';
import PortfolioItem from '../portfolio/PortfolioItem';
import UserItem from '../users/UserItem';
import Navbar from '../navbar/Navbar';
import LandingPage from '../landingPage/LandingPage';
import Login from '../login/Login';


import './home.css';
import Form from '../form/Form';

function Home() {

	const [projects, setProjects] = useState([]);
	const [show, setShow] = useState('Show');
	const [homeShow, setHomeShow] = useState("noShowHome")


	function showing() {
		setShow('noShow');
		setHomeShow('homeShow')
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
			<Login show={show} showing={showing}/>
			<div className={homeShow}>
			<div className="home">
			
			<div className="home-container">
				<Navbar />
				<div className="content-container">
					<div className="cont content-container-left">
						<PortfolioItem />
					</div>
					<div className="cont content-container-right">
						{/* <UserItem /> */}
						{projects.map((value)=> <ProjectItem title={value.title} description={value.description} key={value.id} id={value.id} deleteProject={deleteProject} />)}
						<div className="form">
							<form action>
								<div className="form-section">
									<input type="text" placeholder="title" />
								</div>
								<div className="form-section">
									<textarea type="text" placeholder="description" />
								</div>
								<button>Add Project</button>
							</form>
						</div>
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
