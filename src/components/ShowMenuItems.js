import React from 'react';
import './ShowMenuItems.css';
import MenuItem from './MenuItem';

const ShowMenuItems = (props) => {

	return (

		<div className="menu-items">

			{props.items.map(item => <MenuItem name={item.name} price={item.price} key={item.id} id={item.id} type={item.type} addItem={props.addItem}/>)}

		</div>

		)

};

export default ShowMenuItems;