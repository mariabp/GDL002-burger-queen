import React from 'react';

import breakfastItems from '../menu';

const showMenuItems = () => {
console.log(breakfastItems);
}

 export class MenuOption extends React.Component {

	render(props) {

		return (
			<button className={this.props.name} action={ showMenuItems(this.props.name) }>{this.props.display}</button>
		)

	}

 }




