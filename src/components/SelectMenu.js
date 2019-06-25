import React, { useState } from 'react';
import './SelectMenu.css';
import ShowMenuItems from './ShowMenuItems';
import SelectMealType from './SelectMealType';
import MENU from '../menu';
import MenuItem from './MenuItem';
import Dashboard from './Dashboard';

const SelectMenu = (props) => {

	const [mealType, setMealType] = useState("none");

	const showBreakfast = () => {

		setMealType("breakfast");

	};

	const showMeals = () => {

		setMealType("meals");

	};

	const showBeverages = () => {

		setMealType("beverages");

	};

	let menuItems = MENU.filter((element) => {

		if (element.type === mealType) {

			return <MenuItem className="item" key={element.id} name={element} price={element.price} type={element.type} addItem={props.addItem} />

		} else {

			return null;

		}

	});

	return (

		<div className="select-menu-container">

			<SelectMealType showBreakfastProp={showBreakfast} showMealsProp={showMeals} showBeveragesProp={showBeverages} />

			<ShowMenuItems className="menu-items" items={menuItems} addItem={props.addItem} />

			<Dashboard addNote={props.addNote} takeOrder={props.takeOrder} />

		</div>

	);

};

export default SelectMenu;