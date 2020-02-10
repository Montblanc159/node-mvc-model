import path from 'path'
import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import "reflect-metadata"
import {createConnection} from "typeorm"
// DB
dotenv.config()

// createConnection().then(connection => {
// }).catch(error => console.log(error))

// Routes
import postRoutes from './routes/posts'

export const app = express()
const port: number = 8080

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  `Now listening on ${port}`
})

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  req
  next
  res.render(path.join(__dirname + '/views/home/index.ejs'), { test: "Yeah" })
})


app.use('/posts', postRoutes)
