import { Router } from "express";

import { MainController } from "../controllers/post.controller";

const router = Router();
const controller = new MainController()

router.route('/')
    .get(controller.getPosts)
    .post(controller.createPost)

export default router;