import React from 'react';
import './Dashboard.css';
import Notes from './Notes'
import HomeButton from './HomeButton';
import SendNote from './SendNote';

class Dashboard extends React.Component {

	constructor (props) {

		super(props);

		this.handleNote = this.handleNote.bind(this);

		this.state = {

			note: "",

		};
	}

	handleNote(event) {

		this.setState({ note: event.target.value });

	}

	render() {

		return (

			<div className="dashboard">

				<Notes handleNote={this.handleNote} />
				<HomeButton />
				<SendNote addNote={this.props.addNote} note={this.state.note}/>

			</div>
		)

	}

}

export default Dashboard;