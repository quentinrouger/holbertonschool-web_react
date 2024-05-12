import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ id, value, type, html, markAsRead }) => {
  // Define styles using Aphrodite
  const styles = StyleSheet.create({
    default: {
      color: 'blue',
    },
    urgent: {
      color: 'red',
    },
  });

  // Conditionally apply styles based on the type prop
  const listItemStyles = type === 'urgent' ? styles.urgent : styles.default;

  return (
    <li
      className={css(listItemStyles)}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    >
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
