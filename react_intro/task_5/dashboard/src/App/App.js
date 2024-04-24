import React from 'react';
import logo from '../assets/holberton_logo.jpeg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" style={{ marginRight: '10px' }}/>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" style={{ marginRight: '10px' }}/>
        <button type='button'>OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
