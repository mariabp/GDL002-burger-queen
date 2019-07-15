import React from 'react';
import './TableId.css';

const TableId = (props) => {

	let tableNumber = 'SELECCIONA UNA MESA'

	if (props.selectedTable) {

		tableNumber = `MESA ${props.selectedTable.number}`;

	}

	return <div className="table-id">{tableNumber}</div>

}

export default TableId;