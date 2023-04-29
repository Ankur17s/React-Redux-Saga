// action is basically do that they take data from reactJs and pass to the reducer
/*
    -> Actions are plain functions 
    -> Get data from React Js
    -> Send data to reducer after process
    -> must have type key in return statement
    -> much sync type in reducer
*/
import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from './constant'

export const addToCart = (data) => {
    console.log("action Add To Cart", data);
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    console.log("action Remove from cart", data)
    return{
        type: REMOVE_TO_CART,
        data
    }
}

export const emptyCart = () => {
    console.log("action Empty Cart");
    return {
        type: EMPTY_CART,
    }
}