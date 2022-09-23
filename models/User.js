const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate: [validateEmail, "Please type a valid email address"],
      // match: [/^.+@(?:[\w-]+\.)+\w+$/, "Please type a valid email address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of thoughts and reactions on retrieval
UserSchema.virtual("friendCount").get(function () {
  return this.users.reduce((total, user) => total + user.friends.length + 1, 0);
});

const User = model("User", UserSchema);

module.exports = User;
