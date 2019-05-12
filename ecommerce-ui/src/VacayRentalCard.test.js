import React from 'react';
import { shallow } from 'enzyme';
import VacayRentalCard from './VacayRentalCard';
import AirBnbs from './_data/airbnbs.json';
import { prototype } from 'events';
import { isFunction, isBoolean, isArray } from 'util';
import { equal } from 'assert';

it('shallow renders VacayRentalCard', () => {
    const wrapper = shallow(
    <VacayRentalCard 
        index = {1}
        listing = {Element}
        host = {prototype}
        hasSuperHost = {isFunction}
        isSuperhost = {isFunction}
        // I CANT FIGURE THIS OUT!!!!
    />);
      expect(wrapper).toMatchSnapshot();
  });