import React from 'react';
import CheckContainer from './CheckContainer';
import SelectMenu from './SelectMenu';

import './TableService.css';

const TableService = (props) => {

	return (

		<main>

			<SelectMenu
				selectedTable={props.selectedTable}
				products={props.products}
				mealType={props.mealType}
				changeMealType={props.changeMealType}
				addProduct={props.addProduct}
				addNote={props.addNote}
				takeOrder={props.takeOrder} />

			<CheckContainer
				notes= {props.notes}
				selectedTable={props.selectedTable}
				removeProduct={props.removeProduct}
				removeNote={props.removeNote}
				submitOrder={props.submitOrder}
			/>

		</main>

	);

}

 export default TableService;