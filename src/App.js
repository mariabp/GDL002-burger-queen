import React from 'react';
import { CheckContainer } from './components/CheckContainer';
import SelectMenu from './components/SelectMenu';

class App extends React.Component {

	constructor (props) {

		super(props);

		this.state = {

			orderCount: 0,

		};

	}

	render(){

		return (

			<main>

				<SelectMenu />

				<CheckContainer />

			</main>

		);
	}

}

 export default App