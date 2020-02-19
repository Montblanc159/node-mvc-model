import express, { Request, Response, NextFunction } from 'express'
const postRoutes = express.Router()

import * as postsController from '../controllers/posts'

postRoutes.get('/', async (req: Request, res: Response, next: NextFunction) => {
  postsController.postsIndex(req, res, next)
})

postRoutes.get('/show/:id', async (req: Request, res: Response, next: NextFunction) => {
  postsController.postShow(req, res, next)
})

postRoutes.get('/new', async (req: Request, res: Response, next: NextFunction) => {
  postsController.postsNew(req, res, next)
})

postRoutes.post('/new', async (req: Request, res: Response, next: NextFunction) => {
  postsController.postCreate(req, res, next)
})

postRoutes.get('/edit/:id', async (req: Request, res: Response, next: NextFunction) => {
  postsController.postEdit(req, res, next)
})

postRoutes.post('/edit/:id', async (req: Request, res: Response, next: NextFunction) => {
  postsController.postUpdate(req, res, next)
})

export default postRoutes
