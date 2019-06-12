import React from 'react';

const Table = (props) => {

		return 	(<button className={props.name} key={props.id} >{props.displayName}</button>);

}

export default Table;