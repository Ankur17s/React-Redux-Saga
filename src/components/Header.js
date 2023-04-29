import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';

const Header = () => {

    const dispatch = useDispatch();

    const result = useSelector((state) => state.cartData);
    console.log("header selector", result);
    
    return (
        <div className='header'>
            <input className='header-input' type="text" placeholder='searh products' onChange={(event) => dispatch(productSearch(event.target.value))} />
            {/* <h1>E-Comm</h1> */}
            <Link to="/cart">
                <div className='cart-div'>
                    <span>{result.length}</span>
                    <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='' />
                </div>
            </Link>
        </div>
    )
}

export default Header
