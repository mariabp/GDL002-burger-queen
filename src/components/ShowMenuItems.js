import React from 'react';
import MenuItem from './MenuItem';
import MENU from '../menu'


class ShowMenuItems extends React.Component {

	constructor (props) {

		super(props);

	//this.menuItems = this.showMenuItems.bind(this);

		this.state = {

			mealtype: "none",

		};
	}

	render() {

		let menuItems =  MENU.map((element) => {

			

				return <MenuItem  />


		});

		return (

			<div className="menu-items">

				{menuItems}

			</div>

		)
	}
};

export default ShowMenuItems;