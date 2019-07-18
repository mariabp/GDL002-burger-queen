import React from 'react';
import './MealType.css';

const MealType = (props) => (

	<button className={props.name} key={props.id} onClick={props.handlerProp}>{props.display}</button>

);

export default MealType;