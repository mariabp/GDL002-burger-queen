import React from 'react';
import './OrderedItem.css';

class OrderedItem extends React.Component {

	render() {

		return (

				<div className="ordered-item" onClick={() => this.props.removeItem(this.props.index)}>{this.props.name} - ${this.props.price}</div>

		)

	}
}

// const OrderedItem = () => {

// }

export default OrderedItem;