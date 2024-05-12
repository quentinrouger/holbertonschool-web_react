import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ id, value, type, html, markAsRead }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}>
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
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
};

export default React.memo(NotificationItem);
