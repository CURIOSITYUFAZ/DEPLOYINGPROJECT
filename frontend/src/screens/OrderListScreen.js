import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { createorder, deleteorder, listorders } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  ORDER_CREATE_RESET,
  ORDER_DELETE_RESET,
} from "../constants/orderConstants";

export default function OrderListScreen(props) {
  const { pageNumber = 1 } = useParams();

  const sellerMode = props.match.path.indexOf("/seller") >= 0;
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const orderCreate = useSelector((state) => state.orderCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    order: createdOrder,
  } = orderCreate;

  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: ORDER_CREATE_RESET });
      props.history.push(`/order/${createdOrder._id}/edit`);
    }
  
    if (successDelete) {
      dispatch({ type: ORDER_DELETE_RESET });
    }
    dispatch(listorders());
  }, [
    createdOrder,
    dispatch,
    props.history,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);

  const deleteHandler = (order) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteorder(order._id));
    }
  };
  // const createHandler = () => {
  //   dispatch(createOrder());
  // };
  const createHandler = () => {
    dispatch(createorder());
  };
  console.log(props.history);
  return (
    <div className="row2">
      <div className="row">
        <h1>Tasks</h1>
        {/* <button
          type="button"
          className="small"
          onClick={() => props.history.push(`/order/${createdOrder._id}/edit`)}
        >
          Create
        </button> */}
        <button type="button" className="primary" onClick={createHandler}>
          Create Product
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.name}</td>
                  <td>{order.description}</td>
                  <td>{order.category}</td>v
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        props.history.push(`/order/${order._id}/edit`)
                      }
                    >
                      Create
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(order)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="row center pagination">
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === page ? 'active' : ''}
                key={x + 1}
                to={`/productlist/pageNumber/${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div> */}
        </>
      )}
    </div>
  );
}
