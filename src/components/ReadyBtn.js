import React from 'react';
import './ReadyBtn.css';

const ReadyBtn = props => (

	<div className="ready-btn" onClick={() => props.deliverOrder(props.table) }>
		<i className="fas fa-bell"></i>
	</div>

)

export default ReadyBtn;