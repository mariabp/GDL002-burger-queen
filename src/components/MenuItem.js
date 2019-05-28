import React from 'react';
import './MenuItem.css';
class MenuItem extends React.Component {

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

				<div className="item" onClick={this.props.addItem.bind(this, itemDetails)}>{this.state.name} - ${this.state.price}</div>

		)
	}
}

export default MenuItem;