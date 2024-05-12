import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" style={{ marginRight: '10px' }}/>
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" style={{ marginRight: '10px' }}/>
      <button type='button'>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    marginTop: '1rem',
    height: 'max-content',
    paddingLeft: '3rem',
  }
});

export default Login;
