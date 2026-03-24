import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js';
import 'dotenv/config';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config
const app = express()
const port = process.env.PORT || 4000;

app.use(cors({
  origin: ["http://localhost:5173", "https://food-delivery-abc.vercel.app"],
  credentials: true
}));


// middleware
app.use(express.json())


// db connection
await connectDB()

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)
app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend-url.vercel.app"],
  credentials: true
}));

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})
