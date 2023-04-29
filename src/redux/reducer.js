/*
    -> Reducer handle data for store
    -> Update Data in store
    -> Rules
        . Need Root Reducer
        . Reducer must return the some value
        . The Reducer must have some initial value  

 */
import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from './constant'

export const cartData = (data = [], action) => {
    // if (action.type === ADD_TO_CART) {
    //     console.log("reducer called", action);
    //     return action.data;
    // } else {
    //     return 'No data'
    // }
    switch (action.type) {
        case ADD_TO_CART:
            console.log("Add_To Cart Condition", action);
            return [action.data, ...data];

        case REMOVE_TO_CART:
            console.log("Remove_To_Cart Conditon", action);
            // data.length = data.length ? data.length - 1 : [];
            const remainingItem = data.filter((item) => item.id !== action.data);
            console.log("remaining item", remainingItem);            
            // return [...data];
            return[...remainingItem]

        case EMPTY_CART:
            console.log("Empty Cart Condition");
            data = [];
            return [...data];

        default:
            return data
    }
}