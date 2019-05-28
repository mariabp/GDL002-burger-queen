import React from 'react';
import './AddedNote.css';

const AddedNote = (props) => {

	return  <div key={props.index} className="added-note" onClick={() => props.removeNote(props.index)}>{props.note}</div>

}

export default AddedNote;