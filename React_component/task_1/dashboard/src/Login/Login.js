import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" style={{ marginRight: '10px' }}/>
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" style={{ marginRight: '10px' }}/>
      <button type='button'>OK</button>
    </div>
  );
}

export default Login;
