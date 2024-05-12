import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <div className={css(styles.small, styles.inline)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" className={css(styles.marginRight)}></input>
      </div>
      <div className={css(styles.small, styles.inline)}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" className={css(styles.marginRight)}></input>
      </div> 
      <button type='button'>OK</button>
    </>
  );
}

const styles = StyleSheet.create({
  marginRight: {
      marginRight: '1rem'
  },
  inline: {
      display: 'inline-block'
  },
  small: {
      '@media (max-width: 900px)': {
          display: 'block',
      }
  }
});

export default Login;
