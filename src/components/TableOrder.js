import React from 'react';
import OrderedItem from './OrderedItem';

class TableOrder extends React.Component {

	render() {

		let n = 0;

		let mapOrder = this.props.order.map((item) => {

			n++;

			return <OrderedItem name={item.name} price={item.price} key={n} id={n} type={item.type} removeItem={this.props.removeItem} />

		});

		return (

			<div className="table-order">

				  {mapOrder}

			</div>

		)

	}

}

export default TableOrder;