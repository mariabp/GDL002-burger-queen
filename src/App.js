import React from 'react';
import { CheckContainer } from './components/CheckContainer';
import SelectMenu from './components/SelectMenu';
import { remove } from 'lodash';

class App extends React.Component {

	constructor (props) {

		super(props);

		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.addNote = this.addNote.bind(this);
		this.removeNote = this.removeNote.bind(this);

		this.state = {

			orderCount: 0,
			order: [],
			notes: []

		};

	}

	removeNote = (noteindex) => {

		let stateNotes = [...this.state.notes];

		remove(stateNotes, (note, index) => {

			return index === noteindex;

		});

		this.setState(() => {

			return { notes: stateNotes };

		});

	}

	addNote = (event) => {

		const note = event.currentTarget.dataset.note;

		const notesUpdate = this.state.notes.concat(note);

		this.setState(() => {

			return { notes: notesUpdate };

		});

	}

	addItem(item) {

		let orderUpdate = this.state.order.concat(item);

		this.setState({ order: orderUpdate })

	}

	removeItem(index) {

		let stateOrder = [...this.state.order];

		remove(stateOrder, (order, stateIndex) => {

			return stateIndex === index;
		});

		this.setState({ order: stateOrder });
	}

	render(){

		return (

			<main>

				<SelectMenu addItem={this.addItem} addNote={this.addNote} />

				<CheckContainer
					notes= {this.state.notes}
					order={this.state.order}
					removeItem={this.removeItem}
					removeNote={this.removeNote}
				 />

			</main>

		);
	}

}

 export default App