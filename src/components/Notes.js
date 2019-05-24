import React from 'react';
import './Notes.css';

class Notes extends React.Component {

	render() {

		return (

				<textarea type="text" placeholder="Notas..." className="notes" onChange={this.props.handleNote}/>

		)

	}

}

export default Notes;