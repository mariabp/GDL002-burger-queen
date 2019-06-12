import React from 'react';

const LoginBtn = props => (

	<div className="login-btn" onClick={() => props.selectService('tableService')}>INGRESAR AL SISTEMA</div>

)

export default LoginBtn;