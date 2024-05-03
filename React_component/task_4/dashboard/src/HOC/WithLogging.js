// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class WithLogging extends Component {
//   componentDidMount() {
//     const { displayName } = this.getComponentName();
//     console.log(`Component ${displayName} is mounted`);
//   }

//   componentWillUnmount() {
//     const { displayName } = this.getComponentName();
//     console.log(`Component ${displayName} is going to unmount`);
//   }

//   getComponentName() {
//     const { type } = this.props.children;
//     const displayName = type.displayName || type.name || 'Component';
//     return { displayName };
//   }

//   render() {
//     const { children } = this.props;
//     return children;
//   }
// }

// WithLogging.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// WithLogging.displayName = function(WrappedComponent) {
//   return `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
// };

// export default WithLogging;

import React from "react";

function WithLogging(WrappedComponent) {
    const componentName = getDisplayName(WrappedComponent);
    class HOC extends React.Component {
        componentDidMount() {
          console.log(`Component ${componentName} is mounted`);
        }

        componentWillUnmount() {
          console.log(`Component ${componentName} is going to unmount`);
        }

        render() {
            return (<WrappedComponent {...this.props}/>);
        }
    }
    HOC.displayName = `WithLogging(${componentName})`;
    return HOC;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

export default WithLogging;
