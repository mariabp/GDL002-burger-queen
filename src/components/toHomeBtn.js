import React from 'react';
import './ToHomeBtn.css';

const ToHomeBtn = (props) => (


	<div className="to-home-btn" onClick={() => props.selectService('selectService')}><i className="fas fa-arrow-left"></i></div>

)

export default ToHomeBtn;