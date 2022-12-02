const { Schema, model, Types } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: {
      type: String,
      required: true,
      max_length: 50,
    },
    friends: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  },
);

userSchema
  .virtual('friendCount')
  .get(function(){
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
