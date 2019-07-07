import React from 'react';
import './SingleOrder.css';
import './KitchenService.css';
import OrderedItem from './OrderedItem';
import AddedNote from './AddedNote';

const SingleOrder = props => {

	let mapOrder = props.order.order.map((item, index) => {

		return <OrderedItem key={index} item={item} kitchenService={true} />

	});

	let mapNotes = props.order.notes.map((note, index) => {

		return <AddedNote key={index} note={note}  />

	});


	return (

		<div className="single-order-container">
			<i className="order-delete fas fa-trash fa-lg"></i>
			<div className="order-date">{props.order.createdAt}</div>
			<div className="order-waiter">{props.order.createdBy}</div>
			<div className="order-table">{props.order.table}</div>

			<div className="items">
				{mapOrder}
			</div>

			<div className="notes">
				{mapNotes}
			</div>

			<div className="order-preparing"></div>
			<div className="order-deliver"></div>

		</div>

	)

}

export default SingleOrder;
