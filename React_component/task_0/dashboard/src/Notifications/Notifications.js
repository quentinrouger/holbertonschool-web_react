import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    position: 'absolute',
    top: 10,
    right: 10
  };

  return (
    <>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      {displayDrawer ? (
        <div className='Notifications'>
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <button style={buttonStyle} aria-label='Close' onClick={handleButtonClick}>
                <img src={closeIcon} alt='Close' width={12} />
              </button>
              <ul>
                {listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      ) : null}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
