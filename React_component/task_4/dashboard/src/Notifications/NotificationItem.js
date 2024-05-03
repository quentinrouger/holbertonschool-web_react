import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {

  render() {
    return (
      <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => this.props.markAsRead(this.props.id)}>
                {this.props.value}
            </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  markAsRead: () => {},
  id: 0
};

export default NotificationItem;
