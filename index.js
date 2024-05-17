import express from "express"
import { mongoDBURL, PORT } from "./config.js"
import mongoose from "mongoose"
import { Book } from "./models/bookModel.js"
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express()

//middleware
app.use(express.json())

//middleware for cors
//opt 1: allow all origins w/ default of cors(*)
app.use(cors())

//opt 2: allow custom origins
// app.use(cors({
//     origin:'http://localhost:5555/',
//     methods:['GET', 'POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }))

app.get('/', (req,res)=>{
    console.log(req)
    return res.status(234).send("Welcome to MERN")
})

app.use('/books', booksRoute)

mongoose.connect(mongoDBURL)
.then(()=>{
console.log('App connected to db')
app.listen(PORT, ()=>{
    console.log(`App is listening to port: ${PORT}`)
})
})
.catch(()=>{
    console.log(error)
})