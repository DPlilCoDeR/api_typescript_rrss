import { Request, Response } from "express";


export class MainController {


    main(req: Request, res: Response){
        res.json(`Welcome to Cara e' libro API`);
    }
}