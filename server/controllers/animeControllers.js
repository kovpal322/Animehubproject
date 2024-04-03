const animeSchema = require("../models/animemodel");
const studioSchema = require("../models/studiomodel");
const categorySchema = require("../models/categoryModel");

const createHomeAnimes = async (req, res) => {
  try {
    const anime = await animeSchema.create({ ...req.body });
    res.status(200).json(anime);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

const createCategory = async (req, res) => {
  try {
    const studio = await categorySchema.create({ ...req.body });
    res.json(studio);
  } catch (err) {
    res.json(err);
  }
};

const getAnimes = async (req, res) => {
  const { q } = req.query;
  try {
    const animes = await animeSchema.aggregate([
      {
        $lookup: {
          from: "studios",
          localField: "studio",
          foreignField: "_id",
          as: "studio",
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "categories",
          foreignField: "_id",
          as: "categories",
        },
      },
    ]);

    res.json(
      q.length > 2
        ? animes.filter((item) =>
            item.title.toLowerCase().includes(q.toLowerCase())
          )
        : animes
    );
  } catch (err) {
    res.json(err);
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categorySchema.find();

    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createHomeAnimes,
  createCategory,
  getAnimes,
  getCategories,
};
