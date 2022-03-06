import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import Dashboard2 from "./screens/Dashboard/Dashboard";
import UserEditScreen from "./screens/UserEditScreen";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import DashboardScreen from "./screens/DashboardScreen";
import Footer from "./components/Footer";
import OrderEditScreen from "./screens/OrderEditScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="row2">
            <div>
              <Link className="brand" to="/">
                EDDY
              </Link>
            </div>
            <div className="subheader">
              <AiOutlineMenu />
            </div>

            <div className="mobilvisibility">
              {/* <Link to="/cart">
            <BsFillCartFill />Səbət
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link> */}

              
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    <RiAdminLine />
                    {userInfo.name} <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                  <li>
                      <Link to="/profile">Profil</Link>
                    </li>
                    <li>
                      <Link to="/dashboardpr">Statistika</Link>
                    </li>
                    <li>
                      <Link to="/productlist">Məhsullar</Link>
                    </li>
                    <li>
                      <Link to="/orderlist">Sifarişlər</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Çıxış et
                      </Link>
                    </li>
                 
                  </ul>
                </div>
              ) : (
                <Link to="/signin">
                <BiLogIn />
                Daxil Ol
              </Link>
              )}
            </div>
          </div>
        </header>

        <main>
         
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>

          <Route
            path="/order/:id/edit"
            component={OrderEditScreen}
            exact
          ></Route>

          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
        

         
         
        
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>

          <PrivateRoute
            path="/dashboardpr"
            component={Dashboard2}
          ></PrivateRoute>

        

          

          
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>

          <AdminRoute
            path="/dashboard"
            component={DashboardScreen}
          ></AdminRoute>

       
        

          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
