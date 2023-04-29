import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
    switch (action.type) {
        // case PRODUCT_LISTING:
        //     console.log("Product Listing condition", action);
        //     return [action.data];

        case SET_PRODUCT_LIST:
            console.log("set product List", action)
            return [...action.data]

        default:
            return data
    }
}