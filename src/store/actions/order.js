import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

//Part where we post Purchase data into dataBase
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error))
            });
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

// Part where we Fetch orders from dataBase
export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err));
            });
    }
};

//Part where we delete order from UI and dataBase
export const deleteOrderFail = () => {
    return {
        type: actionTypes.DELETE_ORDER_FAIL,
    };
};

export const deleteOrderSuccess = (id) => {
    return (dispatch, getState) => {
        const currentState = getState();
        dispatch({
            type: actionTypes.DELETE_ORDER_SUCCESS,
            orderId: id,
            orders: currentState.order.orders
        })
    }
}

export const deleteOrderStart = () => {
    return {
        type: actionTypes.DELETE_ORDER_START
    };
};

export const deleteOrder = (id, token) => {
    return dispatch => {
        dispatch(deleteOrderStart());
        axios.delete('/orders/' + id + '.json?auth=' + token)
            .then(res => {
                res ? dispatch(deleteOrderSuccess(id)) : dispatch(deleteOrderFail());
            })
    }
}