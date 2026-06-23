const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {

    const { username, text, image } = req.body;

    if (!text && !image) {
      return res.status(400).json({
        message: "Text or image required"
      });
    }

    const post = await Post.create({
      username,
      text,
      image
    });

    res.status(201).json(post);

  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getPosts = async (req, res) => {

  try {

    const posts = await Post.find()
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (err) {

    res.status(500).json(err);

  }

};

exports.likePost = async (req, res) => {
  try {

    const { username } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    const alreadyLiked =
      post.likes.includes(username);

    if (alreadyLiked) {

      post.likes =
        post.likes.filter(
          user => user !== username
        );

    } else {

      post.likes.push(username);

    }

    await post.save();

    res.json(post);

  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addComment = async (req, res) => {

  try {

    const { username, text } = req.body;

    const post =
      await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message:"Post not found"
      });
    }

    post.comments.push({
      username,
      text
    });

    await post.save();

    res.json(post);

  } catch (err) {

    res.status(500).json(err);

  }

};