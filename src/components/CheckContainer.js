import React from 'react'
import './CheckContainer.css'
import TableOrder from './TableOrder';
import TableId from './TableId'

const CheckContainer = (props) => {

	return (

		<div className="check-container">

			<TableId />

			<TableOrder
				order={props.order}
				notes={props.notes}
				index={props.index}
				removeItem={props.removeItem}
				removeNote={props.removeNote}
			/>

		</div>

	)

};

export default CheckContainer;