import { NextFunction, Request, Response } from 'express'
import path from 'path'
import Post from '../models/posts'

export function postsList(req: Request, res: Response, next: NextFunction): void {
  res.render(path.join(__dirname + '/../' +'/views/posts/index.ejs'), { test: 1 + 1 })
}

export function postDetail(req: Request, res: Response, next: NextFunction): void {
  res.send('Testing controller for post detail')
}
