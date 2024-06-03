import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default BodySection;
