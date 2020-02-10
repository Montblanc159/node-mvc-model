import { NextFunction, Request, Response } from 'express'
import path from 'path'
import Post from '../models/posts'
import {createConnection} from "typeorm";

export function postsIndex(req: Request, res: Response, next: NextFunction): void {
  createConnection().then(async connection => {

    const posts = await Post.find()

    console.log("Posts: ", posts)
    connection.close()

    res.render(path.join(__dirname + '/../' +'/views/posts/index.ejs'), { posts: posts })
}).catch(error => console.log(error))
}

export function postShow(req: Request, res: Response, next: NextFunction): void {
  createConnection().then(async connection => {

    const post = await Post.findOne(req.params.id)

    console.log("Post: ", post)
    connection.close()

    res.render(path.join(__dirname + '/../' +'/views/posts/show.ejs'), { post: post })
}).catch(error => console.log(error))
}

export function postsNew(req: Request, res: Response, next: NextFunction): void {
  res.render(path.join(__dirname + '/../' +'/views/posts/new.ejs'), { test: 1 + 1 })
}

export function postCreate(req: Request, res: Response, next: NextFunction) {
  createConnection().then(async connection => {

    const post = new Post()
    post.title = req.body.title
    post.body = req.body.body
    post.published = req.body.published == "true"

    await post.save()
    console.log("Post saved: ", post)
    connection.close()
    res.redirect('/posts/show/' + post.id)

}).catch(error => console.log(error))


}
