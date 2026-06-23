const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

  username:{
    type:String,
    required:true
  },

  text:{
    type:String
  },

  image:{
    type:String
  },

  likes:[
    String
  ],

  comments:[
    {
      username:String,
      text:String
    }
  ]

},
{
  timestamps:true
});

module.exports = mongoose.model("Post",postSchema);