import express, { Request, Response, NextFunction } from 'express'
const postRoutes = express.Router()

import * as postsController from '../controllers/posts'

postRoutes.get('/', (req: Request, res: Response, next: NextFunction) => {
  postsController.postsList(req, res, next)
})

export default postRoutes
