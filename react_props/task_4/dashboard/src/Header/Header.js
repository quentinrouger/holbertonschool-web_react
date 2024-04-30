import React from 'react';
import logo from '../assets/holberton_logo.jpeg';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="holberton logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;
