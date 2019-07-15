import React from 'react';
import './SelectTable.css';
import ShowTables from './ShowTables';
import TableId from './TableId';
import ToHomeBtn from './toHomeBtn';


const SelectTable = props => {

		return 	(
			<div className="select-table-container">
				<ToHomeBtn selectService={props.selectService} />
				<div className="tables-title">BURGER QUEEN</div>
				<TableId />
				<ShowTables tables={props.tables} takeOrder={props.takeOrder} deliverOrder={props.deliverOrder} />
			</div>
		)

}



export default SelectTable;