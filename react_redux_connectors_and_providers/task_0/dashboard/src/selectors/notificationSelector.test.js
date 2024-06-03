// src/selectors/notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const state = fromJS({
    filter: 'DEFAULT',
    notifications: {
      1: { id: 1, type: "default", value: "New course available", isRead: false },
      2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false }
    }
  });

  it('filterTypeSelected should return the filter type', () => {
    expect(filterTypeSelected(state)).toBe('DEFAULT');
  });

  it('getNotifications should return all notifications', () => {
    const notifications = getNotifications(state);
    expect(notifications.toJS()).toEqual({
      1: { id: 1, type: "default", value: "New course available", isRead: false },
      2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false }
    });
  });

  it('getUnreadNotifications should return only unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.toJS()).toEqual({
      1: { id: 1, type: "default", value: "New course available", isRead: false },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false }
    });
  });
});
