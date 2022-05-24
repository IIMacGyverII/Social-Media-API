// was students.js
const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      unique: true,
      // careful with the code below
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    thoughts: {
      type: Schema.Types.Array, ref: "thoughtSchema.thoughtId",
    },
    friends: {
      // type: Array, ref: "users",
      type: Schema.Types.Array, ref: 'users.id',  
    }, 
    },
    {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Refernce activity21/models/post.js
// Convert to - Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
  
});


const User = model("user", userSchema);

module.exports = User;
