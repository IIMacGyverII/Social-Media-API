// was assingments.js
const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      // minlength: 4,
      // default: 'Unnamed reaction',
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // watch out for this below, may need to delete it!
    updatedAt: {
      type: Date,
      get: (date) => timeSince(date),
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
  }
);

module.exports = reactionSchema;
