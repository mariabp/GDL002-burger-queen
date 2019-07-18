import React from 'react';
import './SendNote.css';

const SendNote = (props) => (

	<button className="send-note" onClick={() => props.addNote(props.selectedTable, props.note)}>ENVIAR NOTA</button>

)



export default SendNote;