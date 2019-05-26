import React from 'react';
import './TableOrder.css';
import OrderedItem from './OrderedItem';
import TotalCheck from './TotalCheck';
import SendOrder from './SendOrder';
import AddedNote from './AddedNote';

class TableOrder extends React.Component {

	render() {

		let mapOrder = this.props.order.map((item, index) => {

			return <OrderedItem name={item.name} index={index} price={item.price} key={index} id={index} type={item.type} removeItem={this.props.removeItem} />

		});

		let mapNotes = this.props.notes.map((note, index) => {

			console.log(index);

			return <AddedNote index={index} key={index} note={note} removeNote={this.props.removeNote} />


		});

		return (

			<div className="table-order">

				<div className="show-ordered-item">

					{mapOrder}

				</div>

				<div className="added-notes">

					{mapNotes}

				</div>

				<TotalCheck order={this.props.order} />

				<SendOrder />

			</div>

		)

	}

}

export default TableOrder;