import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';
import BodySection from './BodySection';

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default BodySectionWithMarginBottom;
