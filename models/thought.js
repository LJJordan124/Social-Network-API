//Import required modules from the 'mongoose' library.
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

//Schema to create Thought model.
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      
    },
    id: false,
  }
);

//Virtual property to increase reaction count as they are added.
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

//Create thought model using the 'thoughtSchema'
const Thought = model('Thought', thoughtSchema);

//Export 'Thought' model so it can be used in application.
module.exports = Thought;