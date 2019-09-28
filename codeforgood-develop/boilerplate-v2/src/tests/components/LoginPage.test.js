import React from 'react';
import ***REMOVED*** shallow ***REMOVED*** from 'enzyme';
import ***REMOVED*** LoginPage ***REMOVED*** from '../../components/LoginPage';

test('should correctly render LoginPage', () => ***REMOVED***
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
***REMOVED***);

test('should call startLogin on button click', () => ***REMOVED***
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin=***REMOVED***startLogin***REMOVED*** />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
***REMOVED***);
