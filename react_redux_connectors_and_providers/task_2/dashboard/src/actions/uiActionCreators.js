import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailure = () => ({ type: LOGIN_FAILURE });

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login(email, password));
  try {
    const response = await fetch('http://localhost:8564/login-success.json');
    if (response.ok) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export const logout = () => {
  return {
    type: LOGOUT,
  };
}

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}
