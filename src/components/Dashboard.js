import React from 'react';
import './Dashboard.css';
import Notes from './Notes'
import HomeButton from './HomeButton';
import SendNote from './SendNote';

class Dashboard extends React.Component {

	render() {

		return (

			<div className="dashboard">

				<Notes />
				<HomeButton />
				<SendNote />

			</div>
		)

	}

}

export default Dashboard;