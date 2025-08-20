const mongoose = require('mongoose');

// Define the Post schema
const postSchema = new mongoose.Schema({
  ImageText: {
    type: String,
    required: true,
  },
  Image:{
    type:String

  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  currentDateAndTime: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
