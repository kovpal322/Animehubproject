const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const homeImageSchema = new Scheme({
  name: { type: String, required: true },
  animeId: { type: mongoose.Types.ObjectId, required: true, ref: "anime" },
  imagePath: { type: String, required: true },
});
module.exports = mongoose.model("homeimage", homeImageSchema);
