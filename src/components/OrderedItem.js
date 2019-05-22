import React from 'react';

class OrderedItem extends React.Component {

	constructor(props) {

		super(props);

		this.state = { 	id: props.id,
						name: props.name,
						price: props.price,
						type: props.type
					};

	}

	render() {

	//	let itemDetails = this.state;

		return (

				<div className="item" onClick={() => this.props.removeItem(this.props.index)}>{this.props.id}. {this.props.name} - ${this.props.price}</div>

		)

	}
}

// const OrderedItem = () => {

// }

export default OrderedItem;