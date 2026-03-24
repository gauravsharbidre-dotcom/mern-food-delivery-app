import orderModel from './../models/orderModel.js';
import userModel from './../models/userModel.js';

// PLACE ORDER (CASH ON DELIVERY)
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      paymentMethod: "COD",
      payment: false,          // ❌ not paid yet
      status: "Processing"
    });

    await newOrder.save();

    // Clear cart
    await userModel.findByIdAndUpdate(req.body.userId, {
      cartData: {}
    });

    res.json({
      success: true,
      message: "Order placed successfully (Cash on Delivery)"
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Order failed" });
  }
};

// USER ORDERS
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

// ADMIN: LIST ALL ORDERS
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

// ADMIN: UPDATE STATUS
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status
    });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, userOrders, listOrders, updateStatus };