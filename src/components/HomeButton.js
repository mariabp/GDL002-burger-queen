import React from 'react';
import './HomeButton.css';

const HomeButton = props => {

		return <button className="home-button" onClick={() => props.selectService('selectService')}>INICIO</button>;

};

export default HomeButton;