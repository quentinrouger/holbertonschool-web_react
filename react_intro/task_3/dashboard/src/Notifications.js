import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

export default function Notifications() {
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
