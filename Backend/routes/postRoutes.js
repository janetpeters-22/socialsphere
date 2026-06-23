const router = require("express").Router();

const {
  createPost,
  getPosts,
  likePost,
  addComment
} = require("../controllers/postController");

router.post("/", createPost);

router.get("/", getPosts);

router.put("/:id/like", likePost);

router.post("/:id/comment", addComment);

module.exports = router;