import React from 'react';

class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { id: props.id, name: props.name, price: props.price, type: props.type };
	}

	render() {
		console.log(this.props)
		return (

			<div>
				<button className="item" key={this.state.id}>{this.state.name} - ${this.state.price}</button>
			</div>
		)
	}
}

export default MenuItem;