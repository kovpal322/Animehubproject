const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const animeCategorySchema = new Scheme(
  {
    animeId: { type: mongoose.Types.ObjectId, required: true, ref: "anime" },
    categoryid: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "category",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("anime_category", animeCategorySchema);
