import * as dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()
//create app
const app = express()

//for parsing json data
app.use(express.json())
//for parsing urlencoded data
app.use(
  express.urlencoded({
    extended: false,
  })
)

//db connection
const dbConnection = () => {
  if (!process.env.MONGO_URI) throw new Error('Mongo Uri is required.')

  try {
    mongoose.connect(process.env.MONGO_URI)
  } catch (error) {
    throw new Error('Database connect problem')
  }
  app.listen(3000, () => {
    console.log('app is running on port 3000')
  })
}
dbConnection()
