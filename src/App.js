import React, { useState, useEffect }from 'react';
import './App.css';
import KitchenService from './components/KitchenService';
import SelectService from './components/SelectService';
import SelectTable from './components/SelectTable';
import TableService from './components/TableService';

const App = () => {

	const [selectedService, setSelectedService] = useState('selectService');
	const [orders, setOrders] = useState([]);
	const [tables, setTables] = useState([]);
	const [products, setProducts] = useState([]);
	const [selectedTable, setSelectedTable] = useState(null);
	const [mealType, setMealType] = useState("none");


// GET TABLES
	useEffect(() => {

		const getTables = async () => {

			let response = await fetch('/tables');
			let updatedTables = await response.json();

			return updatedTables;

		};

		getTables()

			.then(updatedTables => { setTables(updatedTables); })

			.catch(error => console.log(error))

		;

	}, []);


// GET ORDERS

	useEffect(() => {

		const getOrders = async () => {

			let response = await fetch('/orders');
			let updatedOrders = await response.json();

			return updatedOrders;

		};

		getOrders()

			.then(updatedOrders => { setOrders(updatedOrders); })

			.catch(error => console.log(error))

		;

	}, []);

// GET PRODUCTS

	useEffect(() => {

		const getProducts = async () => {

			let response = await fetch('/products');
			let updatedProducts = await response.json();

			return updatedProducts;

		};

		getProducts()

			.then(updatedProducts => { setProducts(updatedProducts); })

			.catch(error => console.log(error))

		;

	}, [mealType]);

// FUNCTIONS

	const removeOrder = async (order) => {

		const res = await fetch (`./orders/${order._id}`, {

			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(order)

		})

		const updatedData = await res.json();

		setOrders(updatedData.updatedOrders);

		if (updatedData.updatedTables) {

			setTables(updatedData.updatedTables);

		}

	}

	const modifyTable = async (id, updatedData) => {

		const res = await fetch(`/tables/update/${id}`, {

			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ data: updatedData })

		})

		const updatedTables = await res.json();

		return updatedTables;
	}

	const modifyOrder = async (id, updatedData) => {

		const res = await fetch(`/orders/update/${id}`, {

			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ data: updatedData })

		})

		const updatedOrders = await res.json();

		return updatedOrders;

	}

	const isPreparing = (order) => {

		modifyTable(order.table_id, { isPreparing: true })

			.then((updatedTables) => setTables(updatedTables))

			.catch(err => console.log(err))

		;

		modifyOrder(order._id, { status: "preparing" })

			.then((updatedOrders) => setOrders(updatedOrders))

			.catch(err => console.log(err))

		;

	};


	const isReady = (order) => {

		modifyTable(order.table_id, { isReady: true })

			.then((updatedTables) => setTables(updatedTables))

			.catch(err => console.log(err))

		;

		modifyOrder(order._id, { status: "ready" })

			.then((updatedOrders) => setOrders(updatedOrders))

			.catch(err => console.log(err))

		;

	};

	const addNote = (selectedTable, note) => {

		selectedTable.pendingNotes.push(note);

		modifyTable(selectedTable._id, { pendingNotes: selectedTable.pendingNotes })

			.then((updatedTables) => setTables(updatedTables))

			.catch(err => console.log(err))
		;

	};

	const removeNote = (selectedTable, noteIndex) => {

		selectedTable.pendingNotes.splice(noteIndex, 1);

		modifyTable(selectedTable._id, { pendingNotes: selectedTable.pendingNotes })

			.then((updatedTables) => setTables(updatedTables))

			.catch(err => console.log(err))
		;

	};

	const addProduct = (selectedTable, product) => {

		selectedTable.pendingOrder.push(product);

		modifyTable(selectedTable._id, { pendingOrder: selectedTable.pendingOrder })

			.then((updatedTables) => setTables(updatedTables))

			.catch(err => console.log(err))
		;

	};

	const removeProduct = (selectedTable, orderedProductIndex) => {

		selectedTable.pendingOrder.splice(orderedProductIndex, 1);

		modifyTable(selectedTable._id, { pendingOrder: selectedTable.pendingOrder })

			.then((updatedTables) => setTables(updatedTables))

			.catch(err => console.log(err))

		;

	};

	const changeMealType = (mealType) => {

		setMealType(mealType);

	};

	const takeOrder = (table) => {

		setSelectedTable(table);

	}

	const submitOrder = async (selectedTable) => {

			console.log(selectedTable.number);

			const res = await fetch('/orders', {

				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					status: 'pending',
					order: selectedTable.pendingOrder,
					table: selectedTable.number,
					table_id: selectedTable._id,
					notes: selectedTable.pendingNotes,
					createdAt: new Date(),
					createdBy: selectedTable.waiter
				})

			});

			const updatedOrders = await res.json();

			setOrders(updatedOrders);

			selectedTable.pendingOrder = [];
			selectedTable.pendingNotes = [];

			modifyTable(selectedTable._id, { pendingOrder: selectedTable.pendingOrder, pendingNotes: selectedTable.pendingNotes })

				.then((updatedTables) => {
					setTables(updatedTables);
				})
				.catch(err => console.log(err))

			;
	};

	const selectService = (selectedService) => {

		setSelectedService(selectedService);

	};

	if (selectedService === 'selectTable') {

		if (selectedTable === null) {

			return <SelectTable selectService={selectService} submitOrder={submitOrder} tables={tables} takeOrder={takeOrder} />;

		} else {

			return <TableService selectedTable={selectedTable} takeOrder={takeOrder} tables={tables} addProduct={addProduct} removeProduct={removeProduct} addNote={addNote} removeNote={removeNote} submitOrder={submitOrder} products={products} mealType={mealType} changeMealType={changeMealType} />

		}

	} else if (selectedService === 'kitchenService'){

		return <KitchenService orders={orders} selectService={selectService} removeOrder={removeOrder} isPreparing={isPreparing} isReady={isReady} />;

	} else {

		return <SelectService selectService={selectService} />

	}


};

export default App;