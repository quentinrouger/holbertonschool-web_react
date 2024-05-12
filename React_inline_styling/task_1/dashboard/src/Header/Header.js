import React from 'react';
import logo from '../assets/holberton_logo.jpeg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <header className={css(styles.AppHeader)}>
      <img src={logo} alt="holberton logo" className={css(styles.logo)}/>
      <h1>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  AppHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fonSize: '1rem',
      color: '#e11d3f',
      bordeBottom: 'solid #e11d3f'
  },
    
  logo: {
      width: 250
  }
});

export default Header;
