import React from 'react'
import menuTypes from '../menu';
import MealType from './MealType';

const typesOfMenu = menuTypes.map(type => <MealType key={type.id} name={type.name} display={type.display} onClick={this}/>)

class SelectMealType extends React.Component {

    render() {
        return (

            <div className="menu-type-container">
			{typesOfMenu}
		    </div>

        )
    }

}

export default SelectMealType;

