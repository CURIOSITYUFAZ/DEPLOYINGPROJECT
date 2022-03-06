import React from "react";
import styled from "styled-components";
import SubDashboardMenu from "./SubDashboardMenu";
const Dashboard = () => {
  return (
    <Wrapper>
      <div className="maindashboard">
          <SubDashboardMenu/>
        <div>
          <h1>Dashboard</h1>
          <div className="boxcontainers">
            <div>
              <h2>Available Position</h2>
              <h3>15</h3>
            </div>
            <div>
              <h2>Jop Opening</h2>
              <h3>10</h3>
            </div>
            <div>
              <h2>New Employers</h2>
              <h3>20</h3>
            </div>
          </div>
          <div className="analyze">
            <div>
              <h2>Available Position</h2>
              <h3>15</h3>
            </div>
            <div>
              <h2>New Employers</h2>
              <h3>20</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};



const Wrapper = styled.div`
width: 95%;
margin: auto;
.maindashboard{
    display:flex;
    justify-content:space-between;
    background-color: #f5f5f5;
}

.boxcontainers {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

}

.boxcontainers div {
  padding: 15px;
  min-width: 200px;
  background: red;
  margin: 10px;
  border-radius: 10px;
}

.analyze {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.analyze div {
    width: 100%;
    background: green;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
}

`

export default Dashboard;
