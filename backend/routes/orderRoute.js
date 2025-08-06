import express from 'express'

import { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, updateStatus, userOrders, verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminauth.js'
import authUser from '../middleware/Auth.js'

const orderRouter = express.Router()

// admin features
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status',adminAuth, updateStatus)


// payment features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)


// user features
orderRouter.post('/userorders',authUser,userOrders)


// verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
export default orderRouter

