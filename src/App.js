import React from 'react';
import SelectMealType from './components/SelectMealType';
import { CheckContainer } from './components/CheckContainer';
import ShowMenuItems from './components/ShowMenuItems';

class App extends React.Component {

	constructor (props) {

		super(props);

		//this.showMenuItems = this.showMenuItems.bind(this);

		this.state = {

			orderCount: 0,

		};
	}

	render(){

		return (

			<main>
				<SelectMealType />
				<ShowMenuItems />
				<CheckContainer />
			</main>

		);
	}

}


 export default App