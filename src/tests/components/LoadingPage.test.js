import React from 'react';
import ***REMOVED*** shallow ***REMOVED*** from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('should correctly render LoadingPage', () => ***REMOVED***
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
***REMOVED***);
