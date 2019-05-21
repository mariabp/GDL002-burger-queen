import React from 'react';

class MenuItem extends React.Component {

	constructor(props) {

		super(props);

		this.state = { 	id: props.id,
						name: props.name,
						price: props.price,
						type: props.type
					};

		this.handleClick = this.handleClick.bind(this)

		}

	handleClick(){
		console.log(this.state.name, this.state.price)

	}

	render() {

		return (

			<div>
				<button className="item" key={this.state.id} onClick={this.handleClick} >{this.state.name} - ${this.state.price}</button>
			</div>
		)
	}
}

export default MenuItem;