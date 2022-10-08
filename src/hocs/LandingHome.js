import React, { useContext } from 'react';

import { ShoppingContext } from '../context/ShoppingProvider';

import WFooterV2 from '../components/organisms/wFooterV2';
import WHeader from '../components/organisms/wHeader';
import WShoppingCart from '../components/organisms/wShoppingCart';
import WChatBoot from '../components/molecules/wChatboot';

export default function WLandingHome({ children }) {
  const { cartVisible, setCartVisible, onDelete } = useContext(ShoppingContext);
  return (
    <>
      <WHeader />
      <main>{children}</main>
      <WFooterV2 />
      <WChatBoot />

      <WShoppingCart
        visible={cartVisible}
        onClose={() => setCartVisible(false)}
        onDelete={onDelete}
      />
    </>
  );
}

WLandingHome.propTypes = {};

export const withLanding = (Component) =>
  function (props) {
    return (
      <WLandingHome>
        <Component {...props} />
      </WLandingHome>
    );
  };
