import React from 'react';
import { shallow } from 'enzyme';
import CartContainer from './CartContainer';
import AirBnbs from './_data/airbnbs.json';
import { isFunction } from 'util';


it('shallow renders CartContainer', () => {
  const wrapper = shallow(
    <CartContainer
        rentalProperties = {AirBnbs}
        onDeleteListing = {isFunction}
    />);
    expect(wrapper).toMatchSnapshot();
});