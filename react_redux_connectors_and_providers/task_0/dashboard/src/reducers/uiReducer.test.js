import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer tests', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it('verifies the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });

  // Add more tests for other actions
  it('verifies the state returned by the uiReducer function, when the action HIDE_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const state = uiReducer(initialState.set('isNotificationDrawerVisible', true), { type: HIDE_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('verifies the state returned by the uiReducer function, when the action LOGIN_SUCCESS is passed, changes correctly the isUserLoggedIn property', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    });
  });

  it('verifies the state returned by the uiReducer function, when the action LOGIN_FAILURE is passed, changes correctly the isUserLoggedIn property', () => {
    const state = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('verifies the state returned by the uiReducer function, when the action LOGOUT is passed, changes correctly the isUserLoggedIn property and clears the user', () => {
    const state = uiReducer(undefined, { type: LOGOUT });
    expect(state.toJS()).toEqual(initialState.toJS());
  });
});
