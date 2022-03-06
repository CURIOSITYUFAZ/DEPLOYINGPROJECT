import React from "react";
import styled from "styled-components";
const Subscribe = () => {
  return (
    <Wrapper>
      <div className="subscribe">
        <h1>What is P-TSHIRT</h1>
        <div className="boxes">
          <div className="box">
            <h3>A community doing good</h3>
            <p>
            There’s no Etsy warehouse – just millions of people selling the
              things they love. We make the whole process easy, helping you
              connect directly with makers to find something extraordinary.
            </p>
          </div>
          <div className="box">
            <h3>Support independent creators</h3>
            <p>
              There’s no Etsy warehouse – just millions of people selling the
              things they love. We make the whole process easy, helping you
              connect directly with makers to find something extraordinary.
            </p>
          </div>
          <div className="box">
            <h3>Peace of mind</h3>
            <p>
              Your privacy is the highest priority of our dedicated team. And if
              you ever need assistance, we are always ready to step in for
              support.
            </p>
          </div>
        </div>
        <div className="subscribebtn">
             <p>Do you have idea or offer? Let's run away</p>
             <a href="mailto:hotsweat1234@gmail.com" className="connect">Let's Connect</a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Subscribe;


const Wrapper = styled.div`
width: 100%;
background: var(--orange-color);
color: white;

.connect {
  background: var(--grey-color);
  padding: 15px;
  margin: 10px;
}
.subscribe{
    padding: 30px;
}
.subscribe h1{
text-align: center;
font-size: 45px;
}
.boxes{
display: flex;
flex-direction: row;
flex: wrap;
justify-content: space-between;
width: 90%;
margin: auto;
}
.subscribe .box{
    padding: 30px;
}

.subscribebtn {
    margin-top: 10px;
    text-align: center;
    padding: 10px;
}
.subscribebtn p{
    font-size: 30px;
}
.subscribebtn button{
    width: 300px;
    border-radius: 0px;
}

@media (max-width: 768px) {
  .subscribe{
    padding: 10px;
}
.subscribe h1{
text-align: center;
font-size: 25px;
}
.subscribe .boxes{
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
margin: auto;
}
.subscribe .box{
    padding: 10px;
    text-align: center;
}

.subscribebtn {
  padding: 10px;
    margin-top: 20px;
    text-align: center;
}
.subscribebtn p{
    font-size: 15px;
    font-weight: bold;
}
.subscribebtn button{
    width: 150px;
    border-radius: 0px;
}

}
`