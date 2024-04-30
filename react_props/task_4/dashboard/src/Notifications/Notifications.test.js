import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders 3 NotificationItem items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('renders the first NotificationItem item with the right type and value', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const firstItem = wrapper.find('NotificationItem').first();
    expect(firstItem.props().type).toBe('default');
    expect(firstItem.props().value).toBe('New course available');
  });

  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.exists('.menuItem')).toBe(true);
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.exists('.Notifications')).toBe(false);
  });

  it('displays menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists('.menuItem')).toBe(true);
  });

  it('displays div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists('.Notifications')).toBe(true);
  });
})
