import express  from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

//app config
const app = express()
const port = 4000

//middleware
app.use (express.json())
app.use (cors())

// db connection
connectDB()

//api endpoint

app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)

//get method
app.get("/",(req,res)=>{
res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

// mongodb+srv://dnynshwrshinde007:Dbs_12890@cluster0.z1c2oyf.mongodb.net/?