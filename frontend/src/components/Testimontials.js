import React from "react";
import styled from "styled-components";
const Testimontials = () => {
  return (
    <Wrapper>
        <h2 className="testitle">Reviews</h2>
      <div className="testimontial">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus ea, perferendis error repudiandae numquam dolor fuga
          temporibus. Unde omnis, consequuntur.
        </h2>

        <div className="tesfooter">
          <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="testimontialimg" />
          <h4>PuffyMan</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimontials;


const Wrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 60%;
margin: auto;
margin-top: 50px;
text-align: center;
margin-bottom: 50px;


.testitle {
    font-size: 30px;
}
.tesfooter {
    display: flex;
    justify-content: center;
    align-items: center;
}
.tesfooter img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-size: cover;
    margin-right: 10px;
}

`