import React from 'react';
import './SelectMenu.css';
import ShowMenuItems from './ShowMenuItems';
import SelectMealType from './SelectMealType';
import MENU from '../menu';
import MenuItem from './MenuItem';

class SelectMenu extends React.Component {

	constructor (props) {

		super(props);

		this.showBreakfast = this.showBreakfast.bind(this);
		this.showMeals = this.showMeals.bind(this);
		this.showBeverages = this.showBeverages.bind(this);

		this.state = {

			mealType: "none",

		};
	}

	showBreakfast() {

		this.setState({ mealType: "breakfast" });

	}

	showMeals() {

		this.setState({ mealType: "meals" });

	}

	showBeverages() {

		this.setState({ mealType: "beverages" });

	}

	render() {

		let menuItems = MENU.filter((element) => {

			if (element.type === this.state.mealType) {

				return <MenuItem className="item" key={element.id} name={element} price={element.price} type={element.type} addItem={this.props.addItem} />

			} else {

				return null;

			}

		});


		return (

			<div className="select-menu-container">

				<SelectMealType showBreakfastProp={this.showBreakfast} showMealsProp={this.showMeals} showBeveragesProp={this.showBeverages} />

				<ShowMenuItems className="menu-items" items={menuItems} addItem={this.props.addItem} />

			</div>

		)

	}
};

export default SelectMenu;