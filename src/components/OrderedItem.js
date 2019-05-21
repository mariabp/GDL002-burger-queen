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

		let itemDetails = this.state;

		return (

				<div className="item" onClick={this.props.removeItem.bind(this, itemDetails)}>{this.state.id}. {this.state.name} - ${this.state.price}</div>

		)

	}
}

export default OrderedItem;