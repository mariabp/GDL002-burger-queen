import React, { useState, useEffect }from 'react';
import './App.css';
import KitchenService from './components/KitchenService';
import Home from './components/Home';
import SelectTable from './components/SelectTable';

const App = () => {

	const [selectedService, setSelectedService] = useState('selectService');
	const [orders, setOrders] = useState([]);
	const [tables, setTables] = useState([]);
	const [selectedTable, setSelectedTable] = useState([]);

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

	});

	const submitOrder = (order, notes) => {
		const updateOrders = orders.concat({order: order, notes: notes});
		setOrders(updateOrders);
	};

	const selectService = (selectedService) => {

		setSelectedService(selectedService);

	};

	if (selectedService === 'selectTable'){

		return <SelectTable selectService={selectService} submitOrder={submitOrder} tables={tables} />;

	} else if (selectedService === 'kitchenService'){

		return <KitchenService />;

	} else {

		return <Home selectService={selectService} />

	}


};

export default App;