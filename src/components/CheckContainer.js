import React from 'react'
import './CheckContainer.css'
import TableOrder from './TableOrder';
import TableId from './TableId'

export class CheckContainer extends React.Component {

		render() {

			return (

				<div className="check-container">

					<TableId />

					<TableOrder order={this.props.order} removeItem={this.props.removeItem} />

				</div>

			)

		}

}