import React, { useState } from 'react';
import CheckContainer from './CheckContainer';
import SelectMenu from './SelectMenu';
import { remove } from 'lodash';

const TableService = (props) => {

	const [order, setOrder] = useState([]);
	const [notes, setNotes] = useState([]);

	const removeNote = (noteindex) => {

		let stateNotes = [...notes];

		remove(stateNotes, (note, index) => {

			return index === noteindex;

		});

		setNotes(() => {

			return stateNotes;

		});

	};

	const addNote = (event) => {

		const note = event.currentTarget.dataset.note;

		const notesUpdate = notes.concat(note);

		setNotes(() => {

			return notesUpdate;

		});

	};

	const addItem = (item) => {

		let orderUpdate = order.concat(item);

		setOrder(() => {

			return orderUpdate;

		})

	};

	const removeItem = (index) => {

		let stateOrder = [...order];

		remove(stateOrder, (order, stateIndex) => {

			return stateIndex === index;
		});

		setOrder(() => {

			return stateOrder;

		});
	};

	return (

		<main>

			<SelectMenu addItem={addItem} addNote={addNote} selectService={props.selectService} />

			<CheckContainer
				notes= {notes}
				order={order}
				removeItem={removeItem}
				removeNote={removeNote}
				/>

		</main>

	);

}

 export default TableService;