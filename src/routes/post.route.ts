import { Router } from "express";

import { PostsController } from "../controllers/post.controller";

const router = Router();
const controller = new PostsController()

router.route('/')
    .get(controller.getAllPosts)
    .post(controller.createPost)

router.route('/:postId')
    .get(controller.getPost)
    .put(controller.updatePost)
    .delete(controller.deletePost)


export default router;