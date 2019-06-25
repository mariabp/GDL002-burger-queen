import React from 'react'
import './SelectMealType.css';
import MealType from './MealType';

const SelectMealType = (props) => {

	return (

		<div className="meal-type">

			<MealType className="breakfast" name="breakfast" display="DESAYUNOS" handlerProp={() => props.changeMealType("breakfast")} />

			<MealType className="meals" name="meals" display="COMIDAS" handlerProp={() => props.changeMealType("meal")} />

			<MealType className="beverages" name="beverages" display="BEBIDAS" handlerProp={() => props.changeMealType("beverage")} />

		</div>

	);

}

export default SelectMealType;