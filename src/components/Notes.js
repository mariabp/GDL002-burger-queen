import React from 'react';
import './Notes.css';

class Notes extends React.Component {

	constructor(props){

		super(props)
		this.handleNote = this.handleNote.bind(this)
		this.state = {

			notes: []

		}
	}

	handleNote(event) {
		console.log('Cada que escribes me ejecuto')
		this.setState( {notes: event.target.value} )

	}



	render() {

		return (

				<textarea type="text" placeholder="Notas..." className="notes" onChange={this.handleNote} />

		)

	}

}

export default Notes;