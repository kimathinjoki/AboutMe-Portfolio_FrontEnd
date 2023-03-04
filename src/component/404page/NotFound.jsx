import React from 'react'
import { Link } from 'react-router-dom'
import './404page.css'

const NotFound = () => {
	return (
		<div className='error-page'>
			<h1>Sorry, that page not found</h1>
			<Link to='/home'>Go back to homepage...</Link>
		</div>
	)
}

export default NotFound