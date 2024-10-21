import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouter from "./routes/FoodRoute.js"
import userRouter from "./routes/UserRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/CartRouter.js"





//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working");
})

// db connection
connectDb();


//API endpoint
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)


app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})


//mongodb+srv://DineNow:<db_password>@cluster0.cepww.mongodb.net/?