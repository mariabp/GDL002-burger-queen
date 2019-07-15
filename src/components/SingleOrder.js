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

		return <AddedNote key={index} note={note} kitchenService={true} />

	});

	let preparingClass = "order-preparing";

	if (props.order.status === "preparing") {
		preparingClass = "order-preparing-true";
	}

	let readyClass = "order-deliver";

	if (props.order.status === "ready") {
		readyClass = "order-ready-true";
	}

	return (

		<div className="single-order-container">
			<div className="order-delete" onClick={() => props.removeOrder(props.order)}>
				<i className="fas fa-trash fa-lg"></i>
			</div>
			<div className="order-date">{props.order.createdAt}</div>
			<div className="order-waiter">{props.order.createdBy}</div>
			<div className="order-table">{props.order.table}</div>

			<div className="items">
				{mapOrder}
			</div>

			<div className="notes">
				{mapNotes}
			</div>

			<div className={preparingClass} onClick={() => props.isPreparing(props.order)}></div>
			<div className={readyClass} onClick={() => props.isReady(props.order)}></div>

		</div>

	)

}

export default SingleOrder;
