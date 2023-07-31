const router = require("express").Router();
const Posts = require("../Modals/post");
const User = require("../Modals/userModal");

// Create a post

router.post("/create", async (req, res) => {
  try {
    // Create a new Post object from the request body.
    const newPost = await new Posts(req.body);

    // Save the new post to the database.
    const savedPost = await newPost.save();

    // Send a response to the client.
    console.log(savedPost, "savedPost");
    res.status(200).json(savedPost);
  } catch (err) {
    // Send an error response to the client.
    res.status(500).json(err);
  }
});

// Update a post

router.put("/:id", async (req, res) => {
  const post = Posts.findById(req.params.id);
  if (post.userId === req.params.userId) {
    try {
      await Posts.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your post");
  }
});

// Delete a post

router.delete("/:id", async (req, res) => {
  try {
    const post = Posts.findById(req.params.id);
    if (post.userId === req.params.userId) {
      try {
        await Posts.deleteOne();
        res.status(200).json("The post has been Dleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can Delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Like/Dislike a post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get post by id
router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get timeline posts

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Posts.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Posts.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
