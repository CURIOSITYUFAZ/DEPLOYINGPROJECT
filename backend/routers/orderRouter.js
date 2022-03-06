import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Order from '../models/orderModel.js';
import { isAdmin, isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  })
);

orderRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Order.insertMany(data.orders);
    res.send({ createdOrders });
  })
);

orderRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = new Order({
      name: 'sample name ' + Date.now(),
      category: '33',
      description: '33',
    });
    const createdOrder = await order.save();
    res.send({ message: 'Order Created', order: createdOrder });
  })
);
orderRouter.put(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orderId = req.params.id;
    const order = await Order.findById(productId);
    if (order) {
      order.name = req.body.name;
      order.category = req.body.category;
      const updatedOrder = await order.save();
      res.send({ message: 'Order Updated', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      const deleteOrder = await Order.remove();
      res.send({ message: 'Order Deleted', order: deleteOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

export default orderRouter;