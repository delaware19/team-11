import React from 'react';
import ***REMOVED*** shallow ***REMOVED*** from 'enzyme';
import ***REMOVED*** Header ***REMOVED*** from '../../components/Header';

test('should render Header correctly', () => ***REMOVED***
  const wrapper = shallow(<Header startLogout=***REMOVED***() => ***REMOVED*** ***REMOVED******REMOVED*** />);
  expect(wrapper).toMatchSnapshot();
***REMOVED***);

test('should call startLogout on button click', () => ***REMOVED***
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout=***REMOVED***startLogout***REMOVED*** />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
***REMOVED***);
