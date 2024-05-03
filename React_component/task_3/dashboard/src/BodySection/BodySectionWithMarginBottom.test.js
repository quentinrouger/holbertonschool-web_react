import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders correctly a BodySection component and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='test title'>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('div').first().hasClass('bodySectionWithMargin')).toEqual(true);
    expect(wrapper.find('BodySection')).toHaveLength(1);
    expect(wrapper.find('BodySection').props().title).toEqual('test title');
    expect(wrapper.find('BodySection').props().children.type).toEqual('p');
    expect(wrapper.find('BodySection').props().children.props.children).toEqual('test children node');
  }
  );
})
