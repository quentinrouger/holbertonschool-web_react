import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS
} from "./notificationActionTypes";

export function markAsRead(index) {
  return {
      type: MARK_AS_READ,
      index
  };
}

export function setNotificationFilter(filter) {
  return {
      type: SET_TYPE_FILTER,
      filter
  };
}

export function setLoadingState(loading) {
  return {
      type: SET_LOADING_STATE,
      loading
  };
}

export function setNotifications(data) {
  return {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data
  };
}

export function fetchNotifications() {
  return async function(dispatch) {
      dispatch(setLoadingState(true));

      try {
      try {
        const data = await fetch('http://localhost:8564/notifications.json');
        const data_1 = await data.json();
        dispatch(setNotifications(data_1));
      } catch (err) {
        return console.log(err);
      }
    } finally {
      return dispatch(setLoadingState(false));
    }
  };
}
