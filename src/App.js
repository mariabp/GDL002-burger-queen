import React from 'react';
import {MenuOption} from './components/MenuOption';
import { CheckContainer } from './components/CheckContainer';
import { BreakfastItems } from './components/BreakfastItems';
import menuTypes from './menu';


function App() {

	const typesOfMenu = menuTypes.map(type => <MenuOption key={type.id} name={type.name} display={type.display}/>)
	return (
	<main>
		<div className="menu-type-container">
			{typesOfMenu}
			<div className="menu-items"></div>
		</div>

		 <CheckContainer />
		 <BreakfastItems />
	</main>
	)
}

 export default App