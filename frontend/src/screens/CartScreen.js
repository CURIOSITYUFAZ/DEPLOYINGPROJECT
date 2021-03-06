import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import {AiFillDelete} from 'react-icons/ai';
export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const size =  props.location.search
  ? props.location.search.split('=')[3]
  : 1;  
  const color =  props.location.search
  ? props.location.search.split('=')[5]
  : 1;  
  
  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, size,color));
    }
  }, [dispatch, productId, qty,size,color]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Səbət</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            Səbət boşdur. <Link to="/">Alış-verişə davam et</Link>
          </MessageBox>
        ) : (
          <ul className='cartcol2'>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div className="">
                    {size}
                  </div>
                  <div className="">
                    {color}
                  </div>
                  <div>
                    <select
                    className='shippingselect'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                       <AiFillDelete/>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1 subtotal">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Toplam Qiymət:    
                              {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} Azn
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Sifarişi rəsmiləşdir
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
