import React from 'react';
import './Button.css';

const Button = props => {

  return (
    <button
      className={`Button Button-primary ${props.extraClassName ? props.extraClassName : ''}`}
      onClick={props.action}
    >
      {props.name}
    </button>
  );
};

export default Button;