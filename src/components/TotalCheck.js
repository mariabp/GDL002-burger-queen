import React from 'react';
import './TotalCheck.css';

const TotalCheck = (props) => {

	const mapItemPrice = props.selectedTable.pendingOrder.map(product => {

		return product.price;

	});


	const totalSum = mapItemPrice.reduce((acc, val) => acc + val, 0);

	return <div className="total-check">TOTAL: $ {totalSum}</div>

};

export default TotalCheck;