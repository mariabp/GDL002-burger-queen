import React from 'react';
import {MenuOption} from './components/MenuOption';
import { CheckContainer } from './components/CheckContainer';
import { BreakfastItems } from './components/BreakfastItems';


function App() {

	return (
	<main>
		<div className="menu-type-container">
		<MenuOption name="breakfast-button" display="DESAYUNOS" />
		<MenuOption name="meals-button" display="COMIDAS" />
		<MenuOption name="beverages-button" display="BEBIDAS" />

		</div>
		 <CheckContainer />
		 <BreakfastItems />
	</main>
	)
}

 export default App