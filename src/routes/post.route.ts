import { Router } from "express";

import { PostController } from "../controllers/post.controller";

const router = Router();
const controller = new PostController()

router.route('/')
    .get(controller.getAllPosts)
    .post(controller.createPost)

router.route('/:postId')
    .get(controller.getPost)
    .put(controller.updatePost)
    .delete(controller.deletePost)


export default router;