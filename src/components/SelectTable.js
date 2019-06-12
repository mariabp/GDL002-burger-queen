import React from 'react';
import './SelectTable.css';
import ShowTables from './ShowTables';
import SelectedTable from './SelectedTable';


const SelectTable = props => {

		return 	(
			<div className="select-table-container">
				<div className="tables-title">BURGER QUEEN</div>
				<SelectedTable />
				<ShowTables tables={props.tables} />

			</div>
		)

}



export default SelectTable;