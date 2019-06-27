import React from 'react';
import './SelectMenu.css';
import ShowMenuItems from './ShowMenuItems';
import SelectMealType from './SelectMealType';
import Dashboard from './Dashboard';

const SelectMenu = (props) => {

	return (

		<div className="select-menu-container">

			<SelectMealType changeMealType={props.changeMealType} />

			<ShowMenuItems className="menu-items" products={props.products} addProduct={props.addProduct} selectedTable={props.selectedTable} mealType={props.mealType} />

			<Dashboard addNote={props.addNote} takeOrder={props.takeOrder} selectedTable={props.selectedTable}/>

		</div>

	);

};

export default SelectMenu;