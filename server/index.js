import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoute from './routes/AuthRoutes.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 3001
const databaseUrl = process.env.MONGODB_URI

app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoute)
app.listen(port, () => {
    console.log('Server is running on http://localhost:3000')
})

mongoose.connect(databaseUrl).then(() => {
    console.log('Database connected')
}).catch((err) => {
    console.log(err.message)
})