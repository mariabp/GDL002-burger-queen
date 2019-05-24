import React from 'react';
import './Dashboard.css';
import HomeButton from './HomeButton';
import SendNote from './SendNote';

class Dashboard extends React.Component {

	render() {

		return (

			<div className="dashboard">

				<HomeButton />
				<SendNote />

			</div>
		)

	}

}

export default Dashboard;