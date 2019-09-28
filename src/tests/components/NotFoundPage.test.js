import React from 'react';
import ***REMOVED*** shallow ***REMOVED*** from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('should render NotFoundPage correctly', () => ***REMOVED***
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
***REMOVED***);
