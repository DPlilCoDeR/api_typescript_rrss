import { Router } from "express";

import { PostController } from "../controllers/post.controller";

const router = Router();
const controller = new PostController()

router.route('/')
    .get(controller.getPosts)
    .post(controller.createPost)

export default router;