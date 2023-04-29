import React, { useEffect } from 'react'
import { addToCart, emptyCart, removeFromCart } from '../redux/action'
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';

const Main = () => {

  const data = useSelector((state) => state.productData)
  console.log("data in main component form saga ", data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, [])
  return (
    <div>
      {/* <button onClick={() => dispatch(addToCart(info))} >Add to Cart</button> */}
      {/* <div>
        <button onClick={() => dispatch(removeFromCart(info.name))} >Remove from Cart</button>
      </div> */}
      <div>
        <button onClick={() => dispatch(emptyCart())} >Empty Cart</button>
      </div>
      {/* <div>
        <button onClick={() => dispatch(productList())} >Product Listing</button>
      </div> */}
      <div className='product-container'>
        {
          data.map((item) => <div key={item.id} className='product-item'>
            <img src={item.img} alt='' />
            <div>Name: {item.name}</div>
            <div>Color: {item.color}</div>
            <div>Brand: {item.brand}</div>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove To Cart</button>
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default Main;
