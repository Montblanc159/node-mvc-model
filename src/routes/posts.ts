import express, { Request, Response, NextFunction } from 'express'
const postRoutes = express.Router()

import * as postsController from '../controllers/posts'

postRoutes.get('/', (req: Request, res: Response, next: NextFunction) => {
  postsController.postsIndex(req, res, next)
})

postRoutes.get('/show/:id', (req: Request, res: Response, next: NextFunction) => {
  postsController.postShow(req, res, next)
})

postRoutes.get('/new', (req: Request, res: Response, next: NextFunction) => {
  postsController.postsNew(req, res, next)
})

postRoutes.post('/new', (req: Request, res: Response, next: NextFunction) => {
  postsController.postCreate(req, res, next)
})

export default postRoutes
