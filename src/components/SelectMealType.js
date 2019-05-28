import React from 'react'
import './SelectMealType.css';
import MealType from './MealType';

const SelectMealType = (props) => {

	return (

		<div className="meal-type">

			<MealType className="breakfast" name="breakfast" display="DESAYUNOS" handlerProp={props.showBreakfastProp}/>

			<MealType className="meals" name="meals" display="COMIDAS" handlerProp={props.showMealsProp} />

			<MealType className="beverages" name="beverages" display="BEBIDAS" handlerProp={props.showBeveragesProp} />

		</div>

	);

}

export default SelectMealType;