import express from "express"
import cors from "cors"
import cookiesParser from "cookies-parser"

const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookiesParser())
 
// routes import
import userRouter from './routes/user.routesjs'
import { HttpProxy } from "vite"


// routes declaration 
app.use("/api/v1/users",userRouter)
// http://localhost:8000/api/v1/users/register

export {app}