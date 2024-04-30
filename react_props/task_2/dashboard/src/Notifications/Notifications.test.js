import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders 3 NotificationItem items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('renders the first NotificationItem item with the right type and value', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find('NotificationItem').first();
    expect(firstItem.props().type).toBe('default');
    expect(firstItem.props().value).toBe('New course available');
  });
})
