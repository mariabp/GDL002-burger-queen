import React from 'react';
import './SelectTable.css';
import ShowTables from './ShowTables';
import TableId from './TableId';


const SelectTable = props => {

		return 	(
			<div className="select-table-container">
				<div className="tables-title">BURGER QUEEN</div>
				<TableId />
				<ShowTables tables={props.tables} />
			</div>
		)

}



export default SelectTable;