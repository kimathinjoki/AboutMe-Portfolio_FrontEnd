import React from 'react';
import avi from '../../avi.png'
import './portfolioitem.css'

function PortfolioItem({name, email, skills, id}) {
	
	const [skillName, setSkillName] = React.useState('');

	function addSkill(){
		fetch('http://127.0.0.1:9292/skills/create',{
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
	
	}


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
					{skills.map( (skill)=> <li key={skill.id}>{skill.name}</li>)}
					{/* <li>Python</li>
					<li>JavaScript</li>
					<li>Bash</li> */}
				</ul>
				<div>
					<input type="text" placeholder='Add skill' value={skillName} onChange={(e)=>{
						e.preventDefault()
						setSkillName(e.target.value)
					}}/>
					<button onClick={addSkill()}>+</button>
				</div>
				
			</div>
			<div className="skills">
				{/* <p>Ruby, Python, JavaScript, Bash</p> */}
			</div>
		</div>
	);
}

export default PortfolioItem;
