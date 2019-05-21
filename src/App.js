import React from 'react';
import { CheckContainer } from './components/CheckContainer';
import SelectMenu from './components/SelectMenu';

class App extends React.Component {

	constructor (props) {

		super(props);

		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);

		this.state = {

			orderCount: 0,
			order: []

		};

	}

	addItem(item) {

		let orderUpdate = this.state.order.concat(item);

		this.setState({ order: orderUpdate })

	}

	// removeItem no funciona, tiene algo que ver con las ids

	removeItem(item) {

		console.log(item);

		let orderUpdate = this.state.order.filter((orderItem) => {

			let orderItemIndex = this.state.order.indexOf(orderItem);

			console.log(orderItemIndex);

			if (orderItemIndex !== item.id) {

				return orderItem;

			} else {

				return null;

			}

		});

		this.setState({ order: orderUpdate })

	}

	render(){

		return (

			<main>

				<SelectMenu addItem={this.addItem} />

				<CheckContainer order={this.state.order} removeItem={this.removeItem}/>

			</main>

		);
	}

}

 export default App