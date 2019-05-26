import React from 'react';
import './AddedNote.css';

class AddedNote extends React.Component{

	render() {

		return  <div key={this.props.index} className="added-note" onClick={() => this.props.removeNote(this.props.index)}>{this.props.note}</div>

	}

}

export default AddedNote;