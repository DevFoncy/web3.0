/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { onAddItem, onDeleteItem } from '../lib/redux/ducks/shoppingCart';
import { showSuccessToast } from '../lib/util/Constants';
import { formatCurrency } from '../lib/util/Util';

export const ShoppingContext = React.createContext(null);

function ShoppingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const { items, location } = useSelector((state) => state.cart);
  const [modalLocation, setModalLocation] = useState(!location);
  const [modalClose, setModalClose] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const count = items.length || 0;
  const dispatch = useDispatch();
  const onAdd = (item) => {
    dispatch(onAddItem(item));
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  const onDelete = (item) => {
    dispatch(onDeleteItem(item));
  };

  const getAmmount = () =>
    formatCurrency(
      items.reduce((total, { quantity = 1, price = 0 }) => quantity * price + total, 0)
    );

  const handleAlert = (message = 'Producto añadido') => {
    showSuccessToast(message);
  };

  return (
    <ShoppingContext.Provider
      value={{
        onAdd,
        onDelete,
        setCartVisible,
        cartVisible,
        modalLocation,
        setModalLocation,
        modalClose,
        setModalClose,
        setLoading,
        loading,
        handleAlert,
        ammount: getAmmount(),
        count,
        isAdded,
      }}
    >
      {children}
      <ToastContainer />
    </ShoppingContext.Provider>
  );
}

export default ShoppingProvider;
