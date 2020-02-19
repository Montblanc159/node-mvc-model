import path from 'path'
import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import "reflect-metadata"
import {createConnection} from "typeorm"
import postRoutes from './routes/posts'

createConnection().then( connection => {

  const app = express()
  const port: number = 8080
  dotenv.config()

  app.set('view engine', 'ejs')
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  // Routes
  app.get('/', (req: Request, res: Response, next: NextFunction) => {
    req
    next
    res.render(path.join(__dirname + '/views/home/index.ejs'), { test: "Yeah" })
  })

  app.use('/posts', postRoutes)

  app.listen(port, () => {
    `Now listening on ${port}`
  })
}).catch(error => console.log(error))
