import React from 'react';
import { shallow } from 'enzyme';
import VacayRentalContainer from './VacayRentalContainer';
import { isFunction } from 'util';

it('shallow renders VacayRentalContainer', () => {
    const wrapper = shallow(
    <VacayRentalContainer
        onBookListing = {isFunction}
    />);
      expect(wrapper).toMatchSnapshot();
  });