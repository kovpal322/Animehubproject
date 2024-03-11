const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const userSchema = new Scheme(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilepicture: { type: String, default: null },
    favoriteAnimes: {
      type: mongoose.Types.ObjectId,
      default: null,
      ref: "animes",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
