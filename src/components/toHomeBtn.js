import React from 'react';
import './ToHomeBtn.css';

const ToHomeBtn = (props) => {


	return <div className="to-home-btn" onClick={() => props.selectService()}><i className="fas fa-arrow-left"></i></div>

}

export default ToHomeBtn;