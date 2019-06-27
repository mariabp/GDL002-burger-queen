import React, { useState } from 'react';
import './Dashboard.css';
import Notes from './Notes'
import HomeButton from './HomeButton';
import SendNote from './SendNote';

const Dashboard = (props) =>{

	const [note, setNote] = useState("");

	const handleNote = (event) => {

		setNote(event.target.value);

	};

	return (

		<div className="dashboard">

			<Notes handleNote={handleNote} />
			<HomeButton takeOrder={props.takeOrder} />
			<SendNote addNote={props.addNote} selectedTable={props.selectedTable} note={note}/>

		</div>

	);

};

export default Dashboard;