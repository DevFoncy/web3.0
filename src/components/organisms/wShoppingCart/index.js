/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import { useDispatch, useSelector } from 'react-redux';
import { pathServer } from '../../../lib/shared/constants/Strings';

// import WButton from '../../atoms/wButton';
// import WButtonActions from '../../molecules/wButtonActions';

import {
  linkToMobileWhatsapp,
  generateLink,
  linkToWebWhatsapp,
  formatCurrency,
} from '../../../lib/util/Util';
import useMobile from '../../../lib/hooks/useMobile';

import { ShoppingContext } from '../../../context/ShoppingProvider';
import { cleanData } from '../../../lib/redux/ducks/shoppingCart';

function Item({ item, index, onDelete }) {
  const [counter, setCounter] = useState(item.quantity);
  if (!item.title) {
    return null;
  }
  return (
    <li key={index} className="d-flex s-pb-2 s-pt-2">
      <div>
        <img src={item?.url} width={60} alt="icon" />
      </div>
      <div className="s-pl-1">
        <p className="font-bold">
          {item?.quantity} x {item?.title}
        </p>
        <p className="font-medium">{formatCurrency(item?.price)}</p>
      </div>
      <div className="ml-auto">
        <ReactSVG
          onClick={onDelete}
          src={`${pathServer.PATH_ICONS}ic_delete.svg`}
          className="icon pointer"
        />
        {/* <WButtonActions counter={counter} setCounter={setCounter} className="" /> */}
      </div>
    </li>
  );
}

const wShoppingCart = ({ visible, onClose, onDelete }) => {
  const { handleAlert, ammount } = useContext(ShoppingContext);
  const { items, location } = useSelector((state) => state.cart);
  const currentDevice = useMobile();
  const dispatch = useDispatch();

  const countItems = items.length || 0;
  const onSend = () => {
    let message = ' Resumen de mi Pedido';
    message += '%0a';
    message += '%0a';
    message += items.map(
      (item) => `✅ Pedido : ${item?.quantity}x${item?.title}  ${formatCurrency(item.price)} %0a`
    );
    message += '%0a';
    message += `El total es ${ammount}`;
    message += '%0a';
    message += `📍Sede ${location?.title}`;
    handleAlert('Orden de compra enviado');
    generateLink(
      currentDevice.isDesktop()
        ? linkToWebWhatsapp(location?.whatsapp, message)
        : linkToMobileWhatsapp(location?.whatsapp, message)
    );
    onClose();
  };

  const onClean = () => {
    dispatch(cleanData());
    onClose();
  };

  return (
    <div className="ShoppingCart">
      <div id="sidebar" className={visible ? 'active' : ' '}>
        <div className="shopping-header">
          <p>
            {' '}
            Entregar en: <strong className="font-bold">Tienda en {location?.title}</strong>{' '}
          </p>
          <ReactSVG
            src={`${pathServer.PATH_ICONS}ic_close.svg`}
            onClick={onClose}
            className="icon"
          />
        </div>
        <div className="shopping-body">
          <h5 className="s-center font-bold">TU CARRITO({countItems})</h5>
          <ul>
            {items?.map((item, index) => (
              <Item item={item} index={index} onDelete={() => onDelete(item)} />
            ))}
          </ul>
        </div>
        <div className="shopping-price s-pl-4 s-pr-4 s-pt-2 s-pb-2">
          <div className="d-flex">
            <p>SubTotal</p>
            <p className="ml-auto">{ammount}</p>
          </div>
          <div className="d-flex">
            <p style={{ textDecoration: 'line-through' }}>
              Delivery (<b>Gratis</b>)
            </p>
            <p className="ml-auto" style={{ textDecoration: 'line-through' }}>
              S/.0.00
            </p>
          </div>
          <div className="d-flex">
            <p className="font-bold">Total a pagar</p>
            <p className="ml-auto font-bold">{ammount}</p>
          </div>
        </div>
        <div className="shopping-footer s-pl-4 s-pr-4" />
      </div>
    </div>
  );
};

wShoppingCart.displayName = 'wShoppingCart';

wShoppingCart.defaultProps = {
  visible: true,
  onClose: () => {},
  onDelete: () => {},
};

wShoppingCart.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};

export default wShoppingCart;
