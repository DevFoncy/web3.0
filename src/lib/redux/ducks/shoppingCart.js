/* eslint-disable default-param-last */
// CONSTANTES
const dataInicial = {
  // ammount: 120,
  items: [],
  status: 1,
  location: null,
};

const EXAMPLE_INFO_SUCCESS = 'EXAMPLE_INFO_SUCCESS';
const ADD_ITEMS_SUCCESS = 'ADD_ITEMS_SUCCESS';
const DELETE_ITEMS_SUCCESS = 'DELETE_ITEMS_SUCCESS';
const ADD_LOCATION_SUCCESS = 'ADD_LOCATION_SUCESS';
const CLEAN_DATA = 'CLEAN_DATA';

// REDUCER

export default function shoppingCartReducer(state = dataInicial, action) {
  switch (action.type) {
    case EXAMPLE_INFO_SUCCESS:
      return { ...state, ...action.payload };
    case ADD_ITEMS_SUCCESS:
      return { ...state, items: [...action.payload] };
    case DELETE_ITEMS_SUCCESS:
      return { ...state, items: [...action.payload] };
    case ADD_LOCATION_SUCCESS:
      return { ...state, ...action.payload };
    case CLEAN_DATA:
      return { ...dataInicial };
    default:
      return state;
  }
}

// ACCIONES

export const loadCart = async (dispatch) => {
  try {
    const res = { data: 'test' };
    dispatch({
      type: EXAMPLE_INFO_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    // manejaremos el error
  }
};

export const onAddItem = (item) => async (dispatch, getState) => {
  try {
    const { cart } = getState();
    const payload = [...cart.items, item];
    dispatch({
      type: ADD_ITEMS_SUCCESS,
      payload,
    });
  } catch (error) {
    throw Error(error);
  }
};

export const onDeleteItem = (item) => async (dispatch, getState) => {
  try {
    const { cart } = getState();
    const payload = cart?.items.filter((c) => c.id !== item.id);
    dispatch({
      type: DELETE_ITEMS_SUCCESS,
      payload,
    });
  } catch (error) {
    throw Error(error);
  }
};
export const onSetLocation = (location) => async (dispatch) => {
  try {
    const payload = {
      location,
    };
    dispatch({
      type: ADD_LOCATION_SUCCESS,
      payload,
    });
  } catch (error) {
    throw Error(error);
  }
};

export const cleanData = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAN_DATA,
    });
  } catch (error) {
    throw Error(error);
  }
};
