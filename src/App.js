import React, { useState }from 'react';
import './App.css';
import KitchenService from './components/KitchenService';
import SelectService from './components/SelectService';
import TableService from './components/TableService';

const App = () => {

	const [selectedService, setSelectedService] = useState('selectService');

	const selectService = (selectedService) => {

		setSelectedService(selectedService);

	};

	if (selectedService === 'tableService'){

		return <TableService selectService={selectService} />;

	} else if (selectedService === 'kitchenService'){

		return <KitchenService />;

	} else {

		return <SelectService selectService={selectService} />

	}


}

export default App;