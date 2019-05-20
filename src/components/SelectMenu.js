import React from 'react';
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
		console.log("test")

	}

	showMeals() {

		this.setState({ mealType: "meals" });
		console.log("test")

	}

	showBeverages() {

		this.setState({ mealType: "beverages" });
		console.log("test")

	}

	render() {

		let menuItems = MENU.filter((element) => {

			console.log(this.state.mealType);

			if (element.type === this.state.mealType) {

				return <MenuItem className="item" key={element.id} name={element.name} price={element.price} type={element.type}  />

			} else {

				return null;

			}

		});


		return (

			<div className="select-menu-container">

				<SelectMealType showBreakfastProp={this.showBreakfast} showMealsProp={this.showMeals} showBeveragesProp={this.showBeverages} />

				<ShowMenuItems className="menu-items" items={menuItems} />

			</div>

		)

	}
};

export default SelectMenu;