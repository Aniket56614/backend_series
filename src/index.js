// require('dotenv').config({path:'./env' })
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"
dotenv.config({
    path: './.env'
})


const app = express()


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`Server is running ar port : ${process.env.PORT}`);
        
    })
})
.catch((err)=> {
    console.log("mongo db coonection failed !!",err)

}) 




















// import mongoose  from "mongoose";
// import {DB_NAME} from "./constants"
// import express from "express"

// const app =express()

// (async()=>{
//     try{ 
//         mongoose.connect(`${process.env.MOGODB_URL}`)
//         app.on("errror",()=>{
//             console.log("ERR: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port
//             ${process.env.PORT}`);
            
//         })
//     } catch(error){
//         console.log("ERROR:",error);
//         throw error
//     }
// })()