import React from 'react';
import ***REMOVED*** shallow ***REMOVED*** from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('should render DashboardPage correctly', () => ***REMOVED***
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
***REMOVED***);
