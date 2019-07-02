import React from 'react';
import './SingleOrder.css';
import OrderedItem from './OrderedItem';

const SingleOrder = props => {

	let mapOrder = props.order.order.map((item, index) => {

		return <OrderedItem key={index} item={item} kitchenService={true} />

	});

	return (

		<div className="single-order-container">
			<div className="order-date">{props.order.createdAt}</div>
			<div className="order-waiter">{props.order.createdBy}</div>
			<div className="order-table">{props.order.table_id}</div>
			<div className="items">
				{mapOrder}
			</div>
		</div>

	)

}

export default SingleOrder;
