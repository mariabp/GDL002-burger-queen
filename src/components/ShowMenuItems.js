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

	console.log(filterProducts);

	const mapfilterProducts = filterProducts.map((product) => {

		return <MenuItem key={product._id} product={product} addItem={props.addItem} />;

	});

	return (

		<div className="menu-items">

			{mapfilterProducts}

		</div>

	)

};

export default ShowMenuItems;