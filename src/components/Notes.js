import React from 'react';
import './Notes.css';

const Notes = (props) => {

	return <textarea type="text" placeholder="Notas..." className="notes" onChange={props.handleNote} />;

};

export default Notes;