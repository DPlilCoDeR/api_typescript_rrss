import { Request, Response } from "express";

import { ConnectionDB } from "../ConnectionDB";
import  Post  from "../interfaces/Ipost.interface";


export class MainController {


    main(req: Request, res: Response){
        res.json(`Welcome to Cara e' libro API`);
    }

    async getPosts(req: Request, res: Response){
        const connection = await ConnectionDB();
        const posts = await connection.query('SELECT * FROM posts')
        return res.json(posts)
    }

    async createPost(req: Request, res: Response){
        const connection = await ConnectionDB();
        const newPost: Post = req.body;
        await connection.query('INSERT INTO posts SET ?', [newPost])
        return res.json({
            message: 'Post created'
        });
    }
}