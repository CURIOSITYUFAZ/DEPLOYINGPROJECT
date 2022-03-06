import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image from "../assets/image1.svg";
import styled from "styled-components";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [numofemployee, setNumberEmployee] = useState("");
  const [phonenumber, setPhonenumber] = useState("")
  const [description, setDescription] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password,country, company, type, numofemployee, phonenumber, description));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <BookDemoWrapper>
      <div className="mainwrapper">
        <div className="infowrapper">
          <h1>Book your Demo</h1>
          <p>
            To arrange your no-obligation online tour of Cezanne HR, simply
            complete the form. One of our friendly product experts will contact
            you to schedule a time that works for you
          </p>
          <img src={image} alt="bookdemo" />
        </div>
        <div className="formwrapper">
          <form  onSubmit={submitHandler}>
            <div className="formdiv">
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Adınızı yazın"
                  required
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div>
             
                <input
                  type="email"
                  id="email"
                  placeholder="Email daxil edin"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>


              <div>
             
             <input
               type="text"
               id="country"
               placeholder="Country daxil edin"
               required
               onChange={(e) => setCountry(e.target.value)}
             ></input>
           </div>



           <div>
             
             <input
               type="text"
               id="company"
               placeholder="Company daxil edin"
               required
               onChange={(e) => setCompany(e.target.value)}
             ></input>
           </div>


           <div>
             
             <input
               type="text"
               id="type"
               placeholder="type daxil edin"
               required
               onChange={(e) => setType(e.target.value)}
             ></input>
           </div>


           <div>
             
             <input
               type="text"
               id="number"
               placeholder="Phone daxil edin"
               required
               onChange={(e) => setPhonenumber(e.target.value)}
             ></input>
           </div>



         

           <div>
             
             <input
               type="text"
               id="employee"
               placeholder="Number Employee daxil edin"
               required
               onChange={(e) => setNumberEmployee(e.target.value)}
             ></input>
           </div> 

           <div>
             
             <input
               type="text"
               id="description"
               placeholder="Description daxil edin"
               required
               onChange={(e) => setDescription(e.target.value)}
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
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Parolu təkrarlayın"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </div>
              <div>
            
                <button className="primary" type="submit">
                  Hesab yarat
                </button>
              </div>
              <div>
                
                <div className="registerfooter">
                  Hesabın var?{" "}
                  <Link to={`/signin?redirect=${redirect}`}>Daxil Ol</Link>
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
    height: 800px;
  }
  .formdiv {
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    width: 90%;
    margin: auto;
    margin-top: 8px;
  }
  .firstdiv {
    display: flex;
    justify-content: space-between;
  }
  input {
    min-width: 220px;
    width: 85%;
    padding: 15px;
    margin-top:7px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    outline: none;
    border: none;
    margin: 20px;
    margin-top: 0px;
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
`;
