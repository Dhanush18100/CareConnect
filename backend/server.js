import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongdb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'

//app config
const app=express()
const port = process.env.PORT || 4000

connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors()) //to connect frontend with backend



//api end point

app.use('/api/admin',adminRouter) // admin router

app.use('/api/doctor',doctorRouter)
app.get('/',(req,res)=>{
    res.send('API working')
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
    
})
