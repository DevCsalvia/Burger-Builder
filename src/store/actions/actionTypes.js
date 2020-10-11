// It's for burger builder reducer and actions [burgerBuilder reducer]
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS_FAILED = 'FETCH_INGREDIENTS_FAILED';

// It's for order handling reducer and actions [order reducer]
export const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';
export const PURCHASE_INIT = 'PURCHASE_INIT';

// It's for fetching orders from dataBase [order reducer]
export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';

// It's for deleting order from dataBase and UI [order reducer]
export const DELETE_ORDER_START = 'DELETE_ORDER_START';
export const DELETE_ORDER_FAIL = 'DELETE_ORDER_FAIL';
export const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS';

// It's for Authentification [auth reducer]
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// It's for correct Redirecting after Authentication [auth reducer]
export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';