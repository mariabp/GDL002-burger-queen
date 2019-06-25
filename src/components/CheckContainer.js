import React from 'react'
import './CheckContainer.css'
import TableOrder from './TableOrder';
import TableId from './TableId'

const CheckContainer = (props) => {

	return (

		<div className="check-container">

			<TableId selectedTable={props.selectedTable} />

			<TableOrder
				selectedTable={props.selectedTable}
				notes={props.notes}
				index={props.index}
				removeProduct={props.removeProduct}
				removeNote={props.removeNote}
				submitOrder={props.submitOrder}
			/>

		</div>

	)

};

export default CheckContainer;