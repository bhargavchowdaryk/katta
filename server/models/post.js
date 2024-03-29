const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "USER",
  },

  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  profile: {
    type: String,
  },
  tags: [
    {
      user: {
        type: String,
        ref: "USER",
      },
    },
  ],
  Comment: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "USER",
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model("post", PostSchema);