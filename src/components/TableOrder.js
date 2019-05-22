import React from 'react';
import OrderedItem from './OrderedItem';

class TableOrder extends React.Component {

	render() {

		// let n = 0;

		let mapOrder = this.props.order.map((item, index) => {

			// n++;

			return <OrderedItem name={item.name} index={index} price={item.price} key={index} id={index} type={item.type} removeItem={this.props.removeItem} />

		});

		return (

			<div className="table-order">

				  {mapOrder}

			</div>

		)

	}

}

export default TableOrder;