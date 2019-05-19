import React from 'react';

class MenuItem extends React.Component {

	constructor(props) {

		super(props);

		this.state = { id: props.id, name: props.name, price: props.price, type: props.type };

	}

	render() {

		return (

			<div>

				<button className={this.props.name}  key={this.props.id}>{this.props.name} - ${this.props.price}</button>

			</div>

		)

	}

}

export default MenuItem;