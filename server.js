import express from "express"
import cors from "cors"

import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// app config
const app = express()
const port = process.env.PORT;


// middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

//mongodb+srv://raj:354321@cluster0.8rhxke3.mongodb.net/?et/?
