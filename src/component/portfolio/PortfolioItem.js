import React from 'react';
import avi from '../../avi.png'
import './portfolioitem.css'

function PortfolioItem() {
	return (
		<div className="portfolio-item">
			<div className="avatar">
				<div className="img">
					<img src={avi} alt="avatar" title='user-avatar' />
				</div>
			</div>
			<div className="name">
				<p>KIMATHI</p>
				<p>kim@multi-work.com</p>
				<h4>Skills</h4>
				<ul>
					<li>Ruby</li>
					<li>Python</li>
					<li>JavaScript</li>
					<li>Bash</li>
				</ul>
			</div>
			<div className="skills">
				{/* <p>Ruby, Python, JavaScript, Bash</p> */}
			</div>
		</div>
	);
}

export default PortfolioItem;
