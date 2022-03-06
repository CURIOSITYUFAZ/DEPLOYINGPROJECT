import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import styled from "styled-components";
export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("L");
  const [color, setColor] = useState("Black");
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;





  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  const addToCartHandler = () => {
    props.history.push(
      `/cart/${productId}?qty=${qty}=size=${size}=color=${color}`
    );
  };

  return (
    <Wrapper>
    <div className='productscreen'>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className='row2'>
          <Link to="/">Back to result</Link>
          <div className="main">
            <div className="productimg">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="content">
              <ul>
                <li>
                  <h1 className='productname'>{product.name}</h1>
                </li>
                <li>
                  <div className='row'>
                    <div className='productprice'>AZN:  {product.price}</div>
                    <div>{product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}</div>
                  </div>
                  </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>
                  Description:
                  <p className='productdesc'>{product.description}</p>
                </li>
                <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  {product.countInStock > 0 && (
                    <>
                        <li>

                        <div className="select">
                          <div>Size</div>
                          <div className='sizeselect'>
                            <select
                              value={size}
                              onChange={(e) => setSize(e.target.value)}
                            >
                              {["XL","L","S","ML","R"].map(
                                (x) => (
                                  <option key={x} value={x}>
                                    {x}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>

                      <li>
                          
                          <div className="select">
                            <div>Color</div>
                            <div className='sizeselect'>
                              <select
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                              >
                                {["Red","Green","Blue","Orange","Black"].map(
                                  (x) => (
                                    <option key={x} value={x}>
                                      {x}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </div>
                        </li>

                      <li>
                        <div className="select">
                          <div>Qty</div>
                          <div className='sizeselect'>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Karta əlavə et
                        </button>
                      </li>
                    </>
                  )}
              </ul>
            </div>
          
      
          </div>


        </div>
      )}
    </div>
    </Wrapper>
  );
}



const Wrapper = styled.div`

.productname {
  font-size: 45px;
  color: black;
  padding: 0px;
  margin: 0px;
}

.productprice {
  font-weight: bold;
  font-size: 40px;
}

@media (max-width: 768px) {
  .productname {
    font-size: 15px
  }
}

`