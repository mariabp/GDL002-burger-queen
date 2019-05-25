import React from 'react';
import './TableOrder.css';
import OrderedItem from './OrderedItem';
import TotalCheck from './TotalCheck';
import SendOrder from './SendOrder';
import AddedNotes from './AddedNotes';

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

				<AddedNotes notes={this.props.notes}/>

				<TotalCheck order={this.props.order} />

				<SendOrder />

			</div>

		)

	}

}

export default TableOrder;