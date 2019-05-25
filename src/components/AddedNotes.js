import React from 'react';
import './AddedNotes.css';

class AddedNotes extends React.Component{

	render() {

		console.log(this.props.notes);
		// const mapNotes= this.props.notes.map(note => {

		// 	return note;

	//	});

		return <div className="added-notes">{this.props.notes}</div>

	}

}


export default AddedNotes;