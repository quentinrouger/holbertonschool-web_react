import React, { Component } from 'react';
import logo from '../assets/holberton_logo.jpeg';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators';

class Header extends Component {
  render() {
      return (
          <>
    <header className={css(styles.AppHeader)}>
      <img src={logo} alt="holberton logo" className={css(styles.logo)}/>
      <h1>School dashboard</h1>
    </header>
    {this.props.user ? (
      <section id='logoutSection'>
        Welcome <strong>{this.props.user.email}</strong> <a onClick={() => {this.props.logout()}}>(logout)</a>
      </section>
  ) : null}
   </>
        );
    }
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

export function mapStateToProps(state) {
  return {
      user: state.get('user')
  };
}

export function mapDispatchToProps(dispatch) {
  return {
      logout: () => dispatch(logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
}

Header.defaultProps = {
  user: null,
  logout: () => {}
}

export { Header };
