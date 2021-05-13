import { Request, Response } from "express";


export class MainController {
    req: string = 'hola';

    

    answer(req: Request, res: Response){
        return res.json(`Welcome to Cara e' libro API`);
    }
}