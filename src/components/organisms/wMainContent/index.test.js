import React from 'react';
import { Provider } from 'react-redux';

import { mount } from 'enzyme';
import ShoppingProvider from '../../../context/ShoppingProvider';

import WModalLocation from './index';
import { store } from '../../../lib/redux/store';
import { COMPANY_LOCATION } from '../../../lib/util/Company';

jest.mock('leaflet', () => ({
  __esModule: true,
  default: [],
}));

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

const renderComponent = (props = {}) =>
  mount(
    <Provider store={store}>
      <ShoppingProvider>
        <WModalLocation {...props} />
      </ShoppingProvider>
    </Provider>
  );

describe('Flow Select Location', () => {
  const mockProps = {
    open: true,
    onClose: jest.fn(),
  };

  test('Component should render without error', () => {
    const wrapper = renderComponent(mockProps);
    expect(wrapper.exists()).toBe(true);
  });

  test('Component should display Button - A Comprar Santa Anita', () => {
    const wrapper = renderComponent(mockProps);
    const btnLocation = findByTestAttr(wrapper, 'btn-location').first();
    expect(btnLocation.text().includes(COMPANY_LOCATION.santa_anita.title)).toBe(true);
  });

  test('Component should execute seLocation and display Button - A Comprar Salamanca', () => {
    const wrapper = renderComponent(mockProps);
    const btnSelectLocation = findByTestAttr(
      wrapper,
      `btn-select-location-${COMPANY_LOCATION.salamanca.title}`
    )
      .first()
      .find('button');
    btnSelectLocation.simulate('click');
    wrapper.update();
    const btnLocation = findByTestAttr(wrapper, 'btn-location').first();
    expect(btnLocation.text().includes(COMPANY_LOCATION.salamanca.title)).toBe(true);
  });

  test('Component should execute onClose', () => {
    const wrapper = renderComponent(mockProps);
    const btnClose = wrapper.find("button[data-testid='close-button']").first();
    btnClose.simulate('click');
    expect(mockProps.onClose).toHaveBeenCalled();
  });

  test('Component should execute seLocation and display Button - A Comprar Salamanca', () => {
    const wrapper = renderComponent(mockProps);
    const btnSelectLocation = findByTestAttr(
      wrapper,
      `btn-select-location-${COMPANY_LOCATION.salamanca.title}`
    )
      .first()
      .find('button');
    btnSelectLocation.simulate('click');
    wrapper.update();
    const btnLocation = findByTestAttr(wrapper, 'btn-location').first().find('button');
    btnLocation.simulate('click');
    expect(mockProps.onClose).toHaveBeenCalled();
  });
});
