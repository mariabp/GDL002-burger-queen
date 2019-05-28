import React from 'react';
import './OrderedItem.css';

const OrderedItem = (props) => {

	return <div className="ordered-item" onClick={() => props.removeItem(props.index)}>{props.name} - ${props.price}</div>;

};

export default OrderedItem;