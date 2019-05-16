import React from 'react';

 export class MenuOption extends React.Component {
  render() {
    return <div className="menu-type-container">
				<button className="breakfast-button">DESAYUNOS</button>
          		<button className="meals-button">COMIDAS</button>
			  	<button className="beverages-button">BEBIDAS</button>
			</div>
  }
}


