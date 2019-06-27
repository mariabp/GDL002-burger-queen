import React from 'react';
import './TableOrder.css';
import OrderedItem from './OrderedItem';
import TotalCheck from './TotalCheck';
import SendOrder from './SendOrder';
import AddedNote from './AddedNote';

const TableOrder = (props) => {

	let mapOrder = props.selectedTable.pendingOrder.map((product, index) => {

		return <OrderedItem selectedTable={props.selectedTable} name={product.name} index={index} price={product.price} key={index} id={index} type={product.type} removeProduct={props.removeProduct} />

	});

	let mapNotes = props.selectedTable.pendingNotes.map((note, index) => {

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

			<TotalCheck selectedTable={props.selectedTable} />

			<SendOrder submitOrder={props.submitOrder} />

		</div>

	);

}

export default TableOrder;