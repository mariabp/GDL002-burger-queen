import React from 'react'
import './SelectMealType.css';
import MealType from './MealType';

class SelectMealType extends React.Component {

	constructor (props) {

		super(props);

		this.state = {};

	}

	render() {

		return (

			<div className="meal-type">

				<MealType className="breakfast" name="breakfast" display="DESAYUNOS" handlerProp={this.props.showBreakfastProp}/>

				<MealType className="meals" name="meals" display="COMIDAS" handlerProp={this.props.showMealsProp} />

				<MealType className="beverages" name="beverages" display="BEBIDAS" handlerProp={this.props.showBeveragesProp} />

			</div>

		)
	}

}

export default SelectMealType;