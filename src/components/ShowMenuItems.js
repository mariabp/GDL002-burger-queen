import React from 'react';
import MenuItem from './MenuItem';

class ShowMenuItems extends React.Component {

	constructor (props) {

		super(props);

		this.state = { mealType: props.type };

	}

	render() {

		return (

			<div className="menu-items">

				{this.props.items.map(item => <MenuItem name={item.name} key={item.id}/>)}

			</div>

		)
	}
};

export default ShowMenuItems;