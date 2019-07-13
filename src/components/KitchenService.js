import React from 'react';
import ToHomeBtn from './toHomeBtn';
import './KitchenService.css';
import SingleOrder from './SingleOrder'
import './SingleOrder.css';

const KitchenService = props => {

	let mapOrders = props.orders.map(order => {
		return <SingleOrder key={order._id} order={order} removeOrder={props.removeOrder} isPreparing={props.isPreparing} isReady={props.isReady} />
	})

	return (
		<div className="kitchen-service-container">
			<div className="kitchen-display">
				<ToHomeBtn className="home-btn" selectService={props.selectService} />
				<div className="display-hour">HORA</div>
				<div className="display-waiter">MESERO</div>
				<div className="display-table">MESA</div>
				<div className="display-preparing">COCINANDO</div>
				<div className="display-deliver">LISTO</div>
			</div>
			<div className="orders-display">
				{mapOrders}
			</div>

		</div>
	);
}

export default KitchenService;