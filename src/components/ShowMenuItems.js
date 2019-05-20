import React from 'react';

class ShowMenuItems extends React.Component {

	constructor (props) {

		super(props);

		this.state = { mealType: props.type };

	}

	render() {

		return (

			<div className="menu-items">

				[this.props.items]

			</div>

		)
	}
};

export default ShowMenuItems;