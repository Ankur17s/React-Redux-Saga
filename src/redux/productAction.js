import { PRODUCT_LISTING, SEARCH_PRODUCT } from "./constant";

export const productList = () => {
    // let data = await  fetch("https://jsonplaceholder.typicode.com/todos/1");
    // data = await data.json()
    // console.log("Product Action called", data);

    return {
        type: PRODUCT_LISTING,
        // data: "abc"
    }
}

export const productSearch = (query) => {
    return {
        type: SEARCH_PRODUCT,
        query,
    }
}