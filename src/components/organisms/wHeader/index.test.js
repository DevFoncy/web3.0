import React from 'react';
import { Provider } from 'react-redux';

import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ShoppingProvider from '../../../context/ShoppingProvider';

import WHeader from './index';
import { COMPANY_LOCATION } from '../../../lib/util/Company';

const initialState = {
  cart: {
    location: COMPANY_LOCATION.salamanca,
    items: [],
    status: 1,
  },
};

let store;

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

const renderComponent = (props = {}) =>
  mount(
    <Provider store={store}>
      <ShoppingProvider>
        <WHeader {...props} />
      </ShoppingProvider>
    </Provider>
  );

describe('Flow Header', () => {
  const mockStore = configureStore();

  test('Component should render without error', () => {
    store = mockStore(initialState);
    const wrapper = renderComponent();
    expect(wrapper.exists()).toBe(true);
  });

  test('Component should display message Location Salamanca Selected', () => {
    store = mockStore(initialState);
    const wrapper = renderComponent();
    const nameLocation = findByTestAttr(wrapper, 'header-location-name');
    expect(nameLocation.text().includes(COMPANY_LOCATION.salamanca.title)).toBe(true);
  });

  test('Component should display empty message when not location is selected', () => {
    const mockState = { ...initialState };
    mockState.cart.location = null;
    store = mockStore(mockState);
    const wrapper = renderComponent();
    const nameLocation = findByTestAttr(wrapper, 'header-location-name');

    // no debe decir santa anita ni salamanca ( empty state )
    expect(nameLocation.text().includes(COMPANY_LOCATION.salamanca.title)).toBe(false);
    expect(nameLocation.text().includes(COMPANY_LOCATION.santa_anita.title)).toBe(false);
  });
});
