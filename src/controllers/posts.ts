import { NextFunction, Request, Response } from 'express'
import path from 'path'
import {getConnection, getManager, getRepository} from "typeorm";
import Post from '../models/posts'

export async function postsIndex(req: Request, res: Response, next: NextFunction) {
  const posts = await getManager().find(Post, { order: { id: "DESC" } })

  res.render(path.join(__dirname + '/../' +'/views/posts/index.ejs'), { posts: posts })
  console.log("Posts: ", posts)
}

export async function postShow(req: Request, res: Response, next: NextFunction) {
  const post = await getRepository(Post).findOne(req.params.id)
  console.log("Post: ", post)
  res.render(path.join(__dirname + '/../' +'/views/posts/show.ejs'), { post: post })
}

export async function postsNew(req: Request, res: Response, next: NextFunction) {
  res.render(path.join(__dirname + '/../' +'/views/posts/new.ejs'))
}

export async function postCreate(req: Request, res: Response, next: NextFunction) {
  const post = new Post()
  post.title = req.body.title
  post.body = req.body.body
  post.published = req.body.published == "true"

  await getManager().save(post).then( () => {
    console.log("Post saved: ", post)
    res.redirect('/posts/show/' + post.id)
  })
}

export async function postEdit(req: Request, res: Response, next: NextFunction) {
  const post = await getManager().findOne(Post, req.params.id)

  res.render(path.join(__dirname + '/../' +'/views/posts/edit.ejs'), { post: post })
}

export async function postUpdate(req: Request, res: Response, next: NextFunction) {
  const post = await getManager().findOne(Post, req.params.id)
  console.log("========================")
  console.log(post)
  console.log("========================")

  if (typeof post === "undefined") {
    res.status(404).send('Entity not found')
  } else {
    post.title = req.body.title
    post.body = req.body.body
    post.published = req.body.published == "true"

    await getManager().save(post).then( () => {
      console.log("Post updated: ", post)
      res.redirect('/posts/show/' + req.params.id)
    })
  }
}
