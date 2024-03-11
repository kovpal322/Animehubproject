const homeimagesModel = require("../models/homeimagesModel");
const animeSchema = require("../models/animemodel");
const createHomeAnimes = async (req, res) => {
  try {
    const workout = await animeSchema.create({ ...req.body });
    res.status(200).json(workout);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
module.exports = { createHomeAnimes };
