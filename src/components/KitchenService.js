import React from 'react';
import ToHomeBtn from './toHomeBtn';
import './KitchenService.css';

const KitchenService = props => (

	<div className="kitchen-service-container">
		<div className="kitchen-display">
			<ToHomeBtn className="home-btn" selectService={props.selectService} />
			<div className="display-hour">HORA</div>
			<div className="display-waiter">MESERO</div>
			<div className="display-table">MESA</div>
			<div className="display-order">ORDEN</div>
			<div className="display-preparing">COCINANDO</div>
			<div className="display-deliver">LISTO</div>
		</div>
		<div className="orders-display">

		</div>

	</div>
)

export default KitchenService;