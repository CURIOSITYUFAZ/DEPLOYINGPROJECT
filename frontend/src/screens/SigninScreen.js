import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import image from "../assets/image1.svg";
import styled from "styled-components";
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <BookDemoWrapper>
      <div className='mainwrapper'>
      <div className="infowrapper">
          <h1>Book your Demo</h1>
          <p>
            To arrange your no-obligation online tour of Cezanne HR, simply
            complete the form. One of our friendly product experts will contact
            you to schedule a time that works for you
          </p>
          <img src={image} alt="bookdemo" />
        </div>

        <div className='formwrapper'>
        <form  onSubmit={submitHandler}>
        
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className='formdiv'>
        <div>

<input
  type="email"
  id="email"
  placeholder="Email adresinizi daxil edin"
  required
  onChange={(e) => setEmail(e.target.value)}
></input>
</div>
<div>

<input
  type="password"
  id="password"
  placeholder="Parolu daxil edin"
  required
  onChange={(e) => setPassword(e.target.value)}
></input>
</div>
<div>
<label />
<button className="primary" type="submit">
 Daxil Ol
</button>
</div>
<div>
<label />
<div className='registerfooter'>
  Yeni müştəri?{' '}
  <Link to={`/register?redirect=${redirect}`}>
  Hesab yarat
  </Link>
</div>
</div>
        </div>
       
      </form>
        </div>
        </div>
    </BookDemoWrapper>
  );
}



const BookDemoWrapper = styled.div`
  background: #f3f7fc;
  font-family: "Montserrat", sans-serif;

  h1 {
    font-size: 55px;
  }
  .mainwrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
  .infowrapper {
    width: 50%;
    padding: 50px;
  }
  .infowrapper img {
    width: 500px;
    height: 500px;
  }
  .formwrapper {
    width: 40%;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 600px;
  }
  .formdiv {
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    width: 90%;
    margin: auto;
    margin-top: 150px;
  }
  .firstdiv {
    display: flex;
    justify-content: space-between;
  }
  input {
    min-width: 220px;
    width: 85%;
    padding: 15px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    outline: none;
    border: none;
    margin: 20px;
  }
  button {
    width: 92%;
    padding: 15px;
    outline: none;
    border: none;
    margin-top: 30px;
    background: #008566;
    color: white;
    border-radius: 15px;
    margin: 20px;
  }

  .registerfooter {
    margin-top: 10px;
    margin: 20px;
  }
  .registerfooter a {
    color: blue;
  }
`;
