import React from 'react';
import './SendNote.css';

class SendNote extends React.Component {

	render() {

		return (

			<button className="send-note" onClick={this.props.addNote} data-note={this.props.note}>ENVIAR NOTA</button>
		)

	}

}

export default SendNote;