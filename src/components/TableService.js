import React, { useState } from 'react';
import CheckContainer from './CheckContainer';
import SelectMenu from './SelectMenu';
import { remove } from 'lodash';
import './TableService.css';

const TableService = (props) => {

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

	return (

		<main>

			<SelectMenu selectedTable={props.selectedTable} products={props.products} mealType={props.mealType} changeMealType={props.changeMealType} addProduct={props.addProduct} addNote={addNote} takeOrder={props.takeOrder} />

			<CheckContainer
				notes= {notes}
				selectedTable={props.selectedTable}
				removeProduct={props.removeProduct}
				removeNote={removeNote}
				submitOrder={props.submitOrder}
			/>

		</main>

	);

}

 export default TableService;