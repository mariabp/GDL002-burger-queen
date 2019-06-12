import React, { useState }from 'react';
import './App.css';
import KitchenService from './components/KitchenService';
import SelectService from './components/SelectService';
import SelectTable from './components/SelectTable';

const App = () => {

	const [selectedService, setSelectedService] = useState('selectService');
	const [orders, setOrders] = useState([]);
	const [tables, setTables] = useState([

		{

			name: 'table1',
			id: 1,
			displayName: 'MESA 1'

		}, {

			name: 'table2',
			id: 2,
			displayName: 'MESA 2'

		}, {

			name: 'table3',
			id: 3,
			displayName: 'MESA 3'

		},{

			name: 'table4',
			id: 4,
			displayName: 'MESA 4'

		},{

			name: 'table5',
			id: 5,
			displayName: 'MESA 5'

		},{

			name: 'table6',
			id: 6,
			displayName: 'MESA 6'

		},{

			name: 'delivery',
			id: 7,
			displayName: 'PARA LLEVAR'
		}
	]);

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

		return <SelectService selectService={selectService} />

	}


};

export default App;