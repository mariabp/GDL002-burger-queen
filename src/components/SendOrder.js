import React from 'react';
import './SendOrder.css';

const SendOrder = (props) => (

	<button className="send-order" onClick={() => props.submitOrder(props.selectedTable)}>ENVIAR COMANDA</button>

)

export default SendOrder;