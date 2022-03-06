import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import styled from 'styled-components';
export default function Product(props) {
  const { product } = props;
  return (
    <Wrapper>
      <div key={product._id} className="cart">
        <div className="proimg">
          <Link to={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </Link>
        </div>
        <div className="card-body">
          <div>{product.name}</div>
       
          <div>AZN </div>
        </div>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  .card {
    min-width: 280px;
    max-width: 280px;
    min-height: 400px;
    max-height: 400px;
    background: none;
    border: none;
  
    
  }
.cart {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
  .card-body {
    padding: 0px;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease-in-out;
  }

  .proimg {
    min-height: 280px;
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
  .medium {
    width: 100%;
    min-height: 280px;
    height: 100%; 
  }

  @media (max-width: 768px) {
    .card {
    min -width: 250px;
    max-width: 250px;
    min-height: 400px;
    max-height: 400px;
    background: red;
    border: none;
  }

  
  .card-body {
    padding: 0px;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease-in-out;
  }


  .proimg {
    background-color: #F8FAFB;
    min-height: 280px;
    height: 100%;
    width: 100%;
  }
  .medium {
    width: 100%;
    min-height: 280px;
    height: 100%; 
  } 
  }
`;

