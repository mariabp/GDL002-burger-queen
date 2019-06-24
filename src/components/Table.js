import React from 'react';
import './Table.css'

const Table = (props) => {

	return 	(<button className="table-btn" onClick={() => props.takeOrder(props.table) }>MESA {props.table.number}</button>);

}

export default Table;