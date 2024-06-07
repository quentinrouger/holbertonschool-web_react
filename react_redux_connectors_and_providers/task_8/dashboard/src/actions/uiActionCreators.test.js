import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators tests', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('Tests the login action', () => {
    expect(login('mail@test.com', 'password')).toEqual({
        type: LOGIN,
        user : {
            email: 'mail@test.com',
            password: 'password'
        }
    });
  });

  it('login action creator returns the correct action', () => {
    const email = 'mail@test.com';
    const password = 'password';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout action creator returns the correct action', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer action creator returns the correct action', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer action creator returns the correct action', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });

  it('Tests that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS', () => {
    const store = mockStore({});
    const email = 'test@test.com';
    const password = 'Test123!';
    const expectedActions = [
        { type: LOGIN,
            user: {
                email,
                password
            }
        },
        { type: LOGIN_SUCCESS },
    ];

    fetchMock.get('http://localhost:8564/login-success.json', 200);

    return store.dispatch(loginRequest(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});
it('Tests that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE', () => {
    const store = mockStore({});
    const email = 'test@test.com';
    const password = 'Test123!';
    const expectedActions = [
        { type: LOGIN,
            user: {
                email,
                password
            }
        },
        { type: LOGIN_FAILURE },
    ];

    fetchMock.get('http://localhost:8564/login-success.json', 500);

    return store.dispatch(loginRequest(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});
});
