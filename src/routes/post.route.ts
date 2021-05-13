import { Router } from "express";

import { MainController } from "../controllers/main.controller";

const router = Router();
const controller = new MainController()

router.route('/')
    .get(controller.getPosts);

export default router;