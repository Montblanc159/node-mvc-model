import express, { NextFunction, Request, Response } from 'express'
import path from 'path'
import postRoutes from './routes/posts'
export const app = express()

const port: number = 3000

app.set('view engine', 'ejs')

app.listen(port, () => {
  `Now listening on ${port}`
})

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  req
  next
  res.render(path.join(__dirname + '/views/home/index.ejs'), { test: "Yeah" })
})

app.use('/posts', postRoutes)
