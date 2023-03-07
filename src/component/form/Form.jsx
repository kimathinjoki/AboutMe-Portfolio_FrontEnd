import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function Form({setProjects, projects, id}) {
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	

	const projectBody = {
		"title": title,
        "description": description,
		"user_id": id
	}

	function addProject(){
		fetch("http://127.0.0.1:9292/projects/create",{
			method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(projectBody)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setProjects(...projects,data)
		})
		
	}


	return (
		<>
			<Button className='butn' variant="dark" onClick={handleShow}>
				Add
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Project</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form action="" className='form' onSubmit={(e)=> e.preventDefault}>
						<input type="text" placeholder='Project name' value={title} onChange={(e)=> {
							e.preventDefault()
							setTitle(e.target.value)}}/>
						<input type="text" placeholder='Project Description' value={description} onChange={(e) => {
							e.preventDefault()
							setDescription(e.target.value)}}/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="warning" onClick={(e)=>{
						e.preventDefault()
                        addProject()
						handleClose()
					}}>Add Project</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Form