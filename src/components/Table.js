import React from 'react';
import './Table.css'

const Table = (props) => {

	let selectedClass = "table-btn";

	if (props.table.isPreparing) {
		selectedClass = "table-btn-preparing";
	} else if (props.table.isReady) {
		selectedClass = "table-btn-ready";
	}

	return 	(<button className={selectedClass} onClick={() => props.takeOrder(props.table) }>MESA {props.table.number}</button>);

}

export default Table;