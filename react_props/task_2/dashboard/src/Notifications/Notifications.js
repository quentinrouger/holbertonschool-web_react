import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  }
  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    position: "absolute",
    top: 10,
    right: 10
  }
  return (
    <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <button style={buttonStyle} aria-label="Close" onClick={handleButtonClick}>
        <img src={closeIcon} alt="Close" width={12}/>
      </button>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
