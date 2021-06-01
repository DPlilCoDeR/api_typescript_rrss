import { Request, Response } from "express";

import { ConnectionDB } from "../ConnectionDB";
import  Post  from "../interfaces/Ipost.interface";


export class PostController {


    async getPosts(req: Request, res: Response){
        const connection = await new ConnectionDB();
        const posts = await connection.connection.query('SELECT * FROM posts')
        return res.json(posts)
    }

    async createPost(req: Request, res: Response){
        const connection = await new ConnectionDB();
        const newPost: Post = req.body;
        await connection.connection.query('INSERT INTO posts SET ?', [newPost])
        return res.json({
            message: 'Post created'
        });
    }
}