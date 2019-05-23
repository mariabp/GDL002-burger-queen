import React from 'react';
import './TableOrder.css';
import OrderedItem from './OrderedItem';
import TotalCheck from './TotalCheck';
import SendOrder from './SendOrder';

class TableOrder extends React.Component {

	render() {

		// let n = 0;

		let mapOrder = this.props.order.map((item, index) => {

			// n++;

			return <OrderedItem name={item.name} index={index} price={item.price} key={index} id={index} type={item.type} removeItem={this.props.removeItem} />

		});

		return (

			<div className="table-order">

			<div className="show-ordered-item">

				{mapOrder}

			</div>

				  <TotalCheck />

				  <SendOrder />

			</div>

		)

	}

}

export default TableOrder;