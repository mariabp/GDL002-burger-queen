import React from 'react';
import './HomeButton.css';

const HomeButton = props => {

		return <button className="home-button" onClick={() => props.takeOrder(null)}>INICIO</button>;

};

export default HomeButton;