import React from 'react';


export function MenuOption(props) {
console.log(props.name);
	return (
		<button className={props.name}>{props.display}</button>
	)

}


/* export class MenuOption extends React.Component {
  render() {
    return <div className="menu-type-container">
				<button className="breakfast-button">DESAYUNOS</button>
          		<button className="meals-button">COMIDAS</button>
			  	<button className="beverages-button">BEBIDAS</button>
			</div>
  }
}
*/

