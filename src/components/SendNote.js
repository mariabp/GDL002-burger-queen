import React from 'react';
import './SendNote.css';

const SendNote = (props) => {

		return 	<button className="send-note" onClick={props.addNote} data-note={props.note}>ENVIAR NOTA</button>

}



export default SendNote;