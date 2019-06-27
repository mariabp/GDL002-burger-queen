import React from 'react';

const KitchenService = props => (

	<div className="kitchen-service-container">
		<div className="kitchen-display">
			<div className="display-waiter">MESERO</div>
			<div className="display-date">HORA</div>
			<div className="display-table">MESA</div>
			<div className="display-order">ORDEN</div>
			<div className="display-preparing">COCINANDO</div>
			<div className="display-deliver">LISTO</div>
		</div>
		<div className="display-orders"></div>

	</div>
)

export default KitchenService;