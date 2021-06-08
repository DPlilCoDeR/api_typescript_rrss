import { json, Request, Response } from "express";

import { ConnectionDB } from "../ConnectionDB";
import  Post  from "../interfaces/Ipost.interface";


export class PostsController {
    private conneDB = new ConnectionDB()


    async getAllPosts(req: Request, res: Response) {
        const posts = await this.conneDB.connection.query('SELECT * FROM posts')
        return res.json(posts[0])
    }

    async getPost(req: Request, res: Response){
        const idPost = req.params.postId;
        const post = await this.conneDB.connection.query('SELECT * FROM posts WHERE id = ?', [idPost])
        return res.json(post[0])
    }

    async createPost(req: Request, res: Response) : Promise<Response>{
        const newPost: Post = req.body;
        await this.conneDB.connection.query('INSERT INTO posts SET ?', [newPost])
        return res.json({
            message: 'Post created'
        });
    }

    async updatePost(req: Request, res: Response) : Promise<Response>{
        const updatedBodyPost = req.body;
        const idPost = req.params.postId
        await this.conneDB.connection.query('UPDATE posts set ? WHERE id = ?', [updatedBodyPost, idPost])
        return res.json({
            message: `Post ${idPost} updated`
        })
    }

    async deletePost(req: Request, res: Response) : Promise<Response>{
        const idPost = req.params.postId;
        await this.conneDB.connection.query('DELETE FROM posts WHERE id = ?', [idPost])
        return res.json({
            message: `Post ${idPost} deleted`
        })
    }
}