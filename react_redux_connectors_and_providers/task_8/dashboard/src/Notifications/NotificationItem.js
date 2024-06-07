import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ id, value, type, html, markAsRead }) => {
  // Define styles using Aphrodite
  const styles = StyleSheet.create({
    default: {
        color: 'blue'
    },
    urgent: {
        color: 'red'
    },
    small: {
        '@media (max-width: 900px)': {
            padding: '10px 8px',
            fontSize: 20,
            listStyle: 'none',
            borderBottom: 'solid black 1px'
        }
    }
  });

  // Conditionally apply styles based on the type prop
  const listItemStyles = type === 'urgent' ? styles.urgent : styles.default;
  const style = css(listItemStyles, styles.small);

  return (
    <li
      className={style}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
]),
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
  id: ""
};

export default React.memo(NotificationItem);
