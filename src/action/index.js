import {FETCH_PRODUCT,ADD_TO_CART,REMOVE}from './type'
import product from '.././api'
import history from '../history'


export const fetchProduct = () => async (dispatch) => {
    const response = await product.get('/products');
    dispatch({
        type: FETCH_PRODUCT,
        payload: response.data,
    })
}

export const handleCartItem = (id) => async (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: id,
    })
}

export const removeFromCart = (id) => async (dispatch) => {
    dispatch({
        type: REMOVE,
        payload: {id},
    })
}

