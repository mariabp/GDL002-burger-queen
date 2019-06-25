import React from 'react';
import './ShowMenuItems.css';
import MenuItem from './MenuItem';

const ShowMenuItems = (props) => {

	const filterProducts = props.products.filter((product) => {

		if (product.type === props.mealType) {

			return product;

		} else {

			return null;

		}

	});

	const mapfilterProducts = filterProducts.map((product) => {

		return <MenuItem key={product._id} product={product} addProduct={props.addProduct} selectedTable={props.selectedTable} />;

	});

	return (

		<div className="menu-items">

			{mapfilterProducts}

		</div>

	)

};

export default ShowMenuItems;