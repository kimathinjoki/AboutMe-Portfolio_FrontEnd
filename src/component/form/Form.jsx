import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function Form() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
					<form action="" className='form'>
						<input type="text" placeholder='Project name'/>
						<input type="text" placeholder='Project Description'/>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="warning">Add Project</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Form