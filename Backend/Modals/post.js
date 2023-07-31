const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      max: 50,
    },
    likes: {
      type: Array,
      default: [],
    },
    image: {
      type: Buffer,
      contentType: String,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
