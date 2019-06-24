import React from 'react';
import Table from './Table';

const ShowTables = (props) => {

	return 	(
		<div className="show-tables">

			{props.tables.map(table => (<Table key={table._id} number={table.number} />))}

		</div>
	);

}

export default ShowTables;