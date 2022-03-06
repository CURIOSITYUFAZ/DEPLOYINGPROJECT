import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { createorder,detailsorder, updateorder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ORDER_UPDATE_RESET } from "../constants/orderConstants";

export default function OrderEditScreen(props) {
  const orderId = props.match.params.id;
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderCreate = useSelector((state) => state.orderCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = orderCreate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      props.history.push("/");
    }
    if (!order || order._id !== orderId || successCreate) {
      dispatch({ type: ORDER_UPDATE_RESET});
      dispatch(detailsorder(orderId));
    } else {
      setName(order.name);
      setDescription(order.description);
      setCategory(order.category);
    }
  }, [order, dispatch, orderId, successCreate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      createorder({
        _id: orderId,
        name,
        description,
        category,
      })
    );
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create Task {orderId}</h1>
        </div>
        {loadingCreate && <LoadingBox></LoadingBox>}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="name">Description</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Task yarat
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
