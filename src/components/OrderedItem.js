import React from 'react';
import './OrderedItem.css';

const OrderedItem = (props) => {

	return <div className="ordered-item" onClick={() => props.removeProduct(props.selectedTable, props.index)}>{props.name} - ${props.price}</div>;

};

export default OrderedItem;