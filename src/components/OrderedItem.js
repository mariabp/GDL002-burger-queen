import React from 'react';
import './OrderedItem.css';

const OrderedItem = (props) => {

	if (props.kitchenService) {

		return <div className="ordered-item">{props.item.name}</div>;

	} else {

		return <div className="ordered-item" onClick={() => props.removeProduct(props.selectedTable, props.index)}>{props.name} - ${props.price}</div>;

	}

};

export default OrderedItem;