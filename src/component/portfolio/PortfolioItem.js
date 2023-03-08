import React from 'react';
import avi from '../../avi.png'
import './portfolioitem.css'
import { useState, useEffect} from 'react';

function PortfolioItem({id}) {

	const [skills, setSkills] = useState([]);
	
	const [skillName, setSkillName] = useState('');


		// gets the skills of a user
	// useEffect(()=>{

	// 	fetch(`https://backendportfolio-9ejn.onrender.com/user/skills/${id}`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setSkills(data)
	// 		})

	// },[])

	function addSkill(){
		fetch(`https://backendportfolio-9ejn.onrender.com/skills/${id}`,{
			method: 'POST',
            headers: {
				'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"name": skillName,
			"user_id": id
		}),
	})
	.then(res => res.json())
	.then((data) =>{
		setSkills(...skills, data)
	})

	}

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	useEffect(()=>{
		fetch(`https://backendportfolio-9ejn.onrender.com/user/${id}`)
		.then(res => res.json())
		.then((data) => {
            console.log(data)
			setName(data.name)
			setEmail(data.email)
			setSkills(data.skills)
			console.log(data.skills)
        })
	},[])







	


	return (
		<div className="portfolio-item">
			<div className="avatar">
				<div className="img">
					<img src={avi} alt="avatar" title='user-avatar' />
				</div>
			</div>
			<div className="name">
				<p>{name}</p>
				<p>{email}</p>
				<h4>Skills</h4>
				<ul>
					{skills.map((skill)=> <li key={skill.id}>{skill.name}</li>)}
				
				</ul>
				<div>
					<input type="text" placeholder='Add skill' value={skillName}  onChange={(e)=>{
						e.preventDefault()
						setSkillName(e.target.value)
					}}/>
					<button onClick={(e)=>{
						e.preventDefault()
						addSkill()
						}}>+</button>
				</div>
				
			</div>
			<div className="skills">
				{/* <p>Ruby, Python, JavaScript, Bash</p> */}
			</div>
		</div>
	);
}

export default PortfolioItem;
