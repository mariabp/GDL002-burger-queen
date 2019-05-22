import React from 'react';
import { CheckContainer } from './components/CheckContainer';
import SelectMenu from './components/SelectMenu';
import { remove } from 'lodash';

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

	removeItem(index) {

		console.log('state', this.state.order);

		// let orderUpdate = this.state.order.filter((orderItem) => {

		// 	let orderItemIndex = this.state.order.indexOf(orderItem) + 1;

		// 	console.log(orderItem);

		// 	if (orderItemIndex !== item.id) {

		// 		return orderItem;

		// 	} else {

		// 		return null;

		// 	}

		// });
		let stateOrder = [...this.state.order];
		remove(stateOrder, (order, stateIndex) => {
			// console.log(stateIndex, index, stateIndex === index);
			return stateIndex === index;
		});
		this.setState({ order: stateOrder });

		// stateOrder = [...stateOrder.slice(0,index), ...stateOrder.slice(index, -1)];

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