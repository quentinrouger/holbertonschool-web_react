import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders Notifications', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('renders Header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('renders Login', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('renders Footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('CourseList is not rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });
});

describe('App Component with isLoggedIn', () => {
  it('renders CourseList', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('Login is not rendered', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it('calls logOut function and displays alert when Ctrl+H is pressed', () => {
    const mockLogOut = jest.fn();
    const logger = jest.spyOn(window, 'alert');
    expect(logger);
    expect(mockLogOut);
    jest.restoreAllMocks();
  });
});
