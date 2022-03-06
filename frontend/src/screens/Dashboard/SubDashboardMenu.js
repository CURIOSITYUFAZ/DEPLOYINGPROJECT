import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const SubDashboardMenu = () => {
  return (
    <Wrapper>
      <div>
        <div className="dashboard-menu">
          <ul>
          <li>
                <Link to="/dashboardpremployeecreate">
              Dashboard
                </Link>
            </li>
            <li>
              <Link to="/orderlist">Tasks</Link>
            </li>
            <li>
              <Link to="/">Schedule</Link>
            </li>
            <li>
              <Link to="/dashboardpremployeecreate">Employee</Link>
            </li>
            <li>
              <Link to="/dashboardpremployeecreate">Department</Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 15%;
  background: orange;
  .dashboard-menu {
    margin-top: 15px;
  }
  .dashboard-menu ul {
    display: flex;
    flex-direction: column;
  }
`;
export default SubDashboardMenu;
