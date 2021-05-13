import { Request, Response } from "express";


export class MainController {


    main(req: Request, res: Response){
        return res.json(`Welcome to Cara e' libro API`);
    }

    getPosts(req: Request, res: Response){
        return res.json(`POSTS`)
    }
}