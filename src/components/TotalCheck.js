import React from 'react';
import './TotalCheck.css';

class TotalCheck extends React.Component {

	render() {

		const mapItemPrice = this.props.order.map(item => {

			return item.price;

		});


		const totalSum = mapItemPrice.reduce((acc, val) => acc + val, 0);

		return <div className="total-check">TOTAL: $ {totalSum}</div>

	}

};

export default TotalCheck;