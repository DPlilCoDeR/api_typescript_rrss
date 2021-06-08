import { json, Request, Response } from "express";

import { ConnectionDB } from "../ConnectionDB";
import  Post  from "../interfaces/Ipost.interface";


export class PostController {


    async getAllPosts(req: Request, res: Response) : Promise<Response>{
        const connection = new ConnectionDB();
        const posts = await connection.connection.query('SELECT * FROM posts')
        return res.json(posts)
    }

    async getPost(req: Request, res: Response){

        const connection = new ConnectionDB();
        const idPost = req.params.postId;
        const post = await connection.connection.query('SELECT * FROM posts WHERE id = ?', [idPost])
        return res.json(post[0])
    }

    async createPost(req: Request, res: Response) : Promise<Response>{
        const connection = new ConnectionDB();
        const newPost: Post = req.body;
        await connection.connection.query('INSERT INTO posts SET ?', [newPost])
        return res.json({
            message: 'Post created'
        });
    }

    async updatePost(req: Request, res: Response) : Promise<Response>{
        const connection = new ConnectionDB();
        const updatedBodyPost = req.body;
        const idPost = req.params.postId
        await connection.connection.query('UPDATE posts set ? WHERE id = ?', [updatedBodyPost, idPost])
        return res.json({
            response: 'post Updated'
        })
    }

    async deletePost(req: Request, res: Response) : Promise<Response>{
        return res.json({
            message: 'delete works'
        })
    }
}