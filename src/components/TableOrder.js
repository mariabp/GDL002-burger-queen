import React from 'react';
import './TableOrder.css';
import OrderedItem from './OrderedItem';
import TotalCheck from './TotalCheck';
import SendOrder from './SendOrder';
import AddedNote from './AddedNote';

const TableOrder = (props) => {

	let mapOrder = props.order.map((item, index) => {

		return <OrderedItem name={item.name} index={index} price={item.price} key={index} id={index} type={item.type} removeItem={props.removeItem} />

	});

	let mapNotes = props.notes.map((note, index) => {

		console.log(index);

		return <AddedNote index={index} key={index} note={note} removeNote={props.removeNote} />


	});

	return (

		<div className="table-order">

			<div className="show-ordered-item">

				{mapOrder}

			</div>

			<div className="added-notes">

				{mapNotes}

			</div>

			<TotalCheck order={props.order} />

			<SendOrder />

		</div>

	);

}

export default TableOrder;