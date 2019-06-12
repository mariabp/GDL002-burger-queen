import React from 'react';
import Table from './Table';


const ShowTables = (props) => {

		return 	(
			<div className="show-tables">

				{props.tables.map( item => (<Table key={item.id} name={item.name} displayName={item.displayName}/>))}

			</div>
		);

}

export default ShowTables;