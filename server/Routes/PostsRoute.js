import express from "express";
import {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
  getOnePost,
} from "../Controllers/PostController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getOnePost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;
