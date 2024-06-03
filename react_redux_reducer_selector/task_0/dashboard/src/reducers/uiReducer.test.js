// src/reducers/uiReducer.test.js
import uiReducer from './uiReducer';
import { 
  DISPLAY_NOTIFICATION_DRAWER, 
  HIDE_NOTIFICATION_DRAWER, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT,
  SELECT_COURSE 
} from '../actions/uiActionTypes';

describe('uiReducer tests', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  // Add tests for the other actions
  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const state = uiReducer({ ...initialState, isNotificationDrawerVisible: true }, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: false,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const state = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: true,
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    const state = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });

  it('should handle LOGOUT', () => {
    const state = uiReducer({ ...initialState, isUserLoggedIn: true }, { type: LOGOUT });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: false,
      user: {},
    });
  });
});
