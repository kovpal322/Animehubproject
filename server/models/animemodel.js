const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const animeSchema = new Scheme(
  {
    title: { type: String, required: true },
    desc: { type: String, default: null },
    creation_year: { type: Number, default: null },
    studio: { type: mongoose.Types.ObjectId, required: true, ref: "studio" },

    imagepath: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("anime", animeSchema);
