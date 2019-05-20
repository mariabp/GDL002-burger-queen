import React from 'react'
import TableOrder from './TableOrder';
import SendOrder from './SendOrder';
import TableId from './TableId'

export class CheckContainer extends React.Component {

		render() {

			return <div className="check-container">

				<TableId />

				<TableOrder />

				<SendOrder />

			</div>

		}

}