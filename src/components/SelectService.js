import React from 'react';
import './SelectService.css';


const selectService = (props) => {

	return (
		<div className="select-service-container">
			<button onClick={() => props.selectService("kitchenService")} className="kitchen-btn">COCINA</button>
			<button onClick={() => props.selectService("selectTable")} className="service-btn">SERVICIO</button>
		</div>
	);

}
export default selectService;