import React, { useState, useEffect }from 'react';
import './App.css';
import KitchenService from './components/KitchenService';
import Home from './components/Home';
import SelectTable from './components/SelectTable';
import TableService from './components/TableService';

const App = () => {

	const [selectedService, setSelectedService] = useState('selectService');
	const [orders, setOrders] = useState([]);
	const [tables, setTables] = useState([]);
	const [products, setProducts] = useState([]);
	const [selectedTable, setSelectedTable] = useState(null);
	const [mealType, setMealType] = useState("none");

	useEffect(() => {

		const getTables = async () => {

			let response = await fetch('/tables');
			let updatedTables = await response.json();

			return updatedTables;

		};

		getTables()

			.then(updatedTables => {

				setTables(updatedTables);

			})

			.catch(error => console.log(error))

		;

	}, []);

	useEffect(() => {

		const getProducts = async () => {

			let response = await fetch('/products');
			let updatedProducts = await response.json();

			return updatedProducts;

		};

		getProducts()

			.then(updatedProducts => {

				setProducts(updatedProducts);

			})

			.catch(error => console.log(error))

		;

	}, [mealType]);

	const addNote = async (selectedTable, note) => {

		selectedTable.pendingNotes.push(note);

		const res = await fetch(`/tables/update/${selectedTable._id}`, {

			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({data:  { pendingNotes: selectedTable.pendingNotes } })

		});

		const updatedTables = await res.json();

		setTables(updatedTables);

	};

	const removeNote = async (selectedTable, noteIndex) => {

		selectedTable.pendingNotes.splice(noteIndex, 1);

		const res = await fetch(`/tables/update/${selectedTable._id}`, {

			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({data: { pendingNotes: selectedTable.pendingNotes }})

		});

		const updatedTables = await res.json();

		setTables(updatedTables);

	};

	const addProduct = async (selectedTable, product) => {

		selectedTable.pendingOrder.push(product);

		const res = await fetch(`/tables/update/${selectedTable._id}`, {

			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({data: { pendingOrder: selectedTable.pendingOrder }})

		});

		const updatedTables = await res.json();

		setTables(updatedTables);

	};

	const removeProduct = async (selectedTable, orderedProductIndex) => {

		selectedTable.pendingOrder.splice(orderedProductIndex, 1);

		const res = await fetch(`/tables/update/${selectedTable._id}`, {

			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({data: { pendingOrder: selectedTable.pendingOrder }})

		});

		const updatedTables = await res.json();

		setTables(updatedTables);

	};

	const changeMealType = (mealType) => {

		console.log(mealType);

		setMealType(mealType);

	};

	const takeOrder = (table) => {

		setSelectedTable(table);

	}

	const submitOrder = (order, notes) => {
		const updateOrders = orders.concat({order: order, notes: notes});
		setOrders(updateOrders);
	};

	const selectService = (selectedService) => {

		setSelectedService(selectedService);

	};

	if (selectedService === 'selectTable') {

		if (selectedTable === null) {

			return <SelectTable selectService={selectService} submitOrder={submitOrder} tables={tables} takeOrder={takeOrder} />;

		} else {

			return <TableService selectedTable={selectedTable} takeOrder={takeOrder} tables={tables} addProduct={addProduct} removeProduct={removeProduct} addNote={addNote} removeNote={removeNote} products={products} mealType={mealType} changeMealType={changeMealType} />

		}

	} else if (selectedService === 'kitchenService'){

		return <KitchenService />;

	} else {

		return <Home selectService={selectService} />

	}


};

export default App;