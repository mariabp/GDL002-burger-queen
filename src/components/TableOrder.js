import React from 'react';
import './TableOrder.css';
import OrderedItem from './OrderedItem';
import TotalCheck from './TotalCheck';
import SendOrder from './SendOrder';
import AddedNote from './AddedNote';

class TableOrder extends React.Component {

	render() {

		let mapOrder = this.props.order.map((item, index) => {

			return <OrderedItem name={item.name} index={index} price={item.price} key={index} id={index} type={item.type} removeItem={this.props.removeItem} />

		});

		return (

			<div className="table-order">

			<div className="show-ordered-item">

				{mapOrder}

			</div>

				<div className="added-notes">

					<AddedNote notes={this.props.notes} removeNote={this.props.removeNote} />

				</div>

				<TotalCheck order={this.props.order} />

				<SendOrder />

			</div>

		)

	}

}

export default TableOrder;