import PostModel from "../Models/postModel.js";

export const getAllPosts = async (req, res) => {
  const posts = await PostModel.find({});
  
  try {
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json("Post Created");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const post = await PostModel.findById(id);

  try {
    await post.updateOne({ $set: { ...req.body } });
    res.status(200).json("Post Updated");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const post = await PostModel.findById(id);

  try {
    await post.deleteOne();
    res.status(200).json("Event deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};