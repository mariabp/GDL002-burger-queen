import React from 'react';
import './AddedNote.css';

const AddedNote = (props) => {

	if (props.kitchenService) {

		return  <div key={props.index} className="added-note">{props.note}</div>

	} else {

		return  <div key={props.index} className="added-note" onClick={() => props.removeNote(props.selectedTable, props.index)}>{props.note}</div>

	}

}

export default AddedNote;