import React from "react";
import PropTypes from 'prop-types';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import { connect } from 'react-redux';

export function Footer(props) {
  const { user } = props;
  return (
    <>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        {user ? (
            <p><a href="">Contact us</a></p>
          ) : null}
      </footer>
    </>
  );
}

Footer.propTypes = {
  user: PropTypes.object
};

Footer.defaultProps = {
  user: null
};

function mapStateToProps(state) {
  return {
    user: state.ui.get('user')
  };
}

export default connect(mapStateToProps)(Footer);

