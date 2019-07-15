import React from 'react';
import './Table.css'
import ReadyBtn from './ReadyBtn';


const Table = (props) => {

	let selectedClass = "table-btn";

	if (props.table.isPreparing) {
		selectedClass = "table-btn-preparing";
	} else if (props.table.isReady) {
		selectedClass = "table-btn-ready";
	}

	return 	(
		<React.Fragment>
			<button className={selectedClass} onClick={() => props.takeOrder(props.table) }>MESA {props.table.number}</button>
			<ReadyBtn deliverOrder={props.deliverOrder} table={props.table} />
		</React.Fragment>
		);

}

export default Table;