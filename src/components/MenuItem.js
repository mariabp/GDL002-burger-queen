import React from 'react';
import './MenuItem.css';

const MenuItem = (props) => {

	return (

			<div className="item" onClick={() => props.addProduct(props.selectedTable, props.product)}>

				{props.product.name} - ${props.product.price}

			</div>

	);

};

export default MenuItem;