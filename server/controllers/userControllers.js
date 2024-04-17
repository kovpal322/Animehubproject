const usermodel = require("../models/usermodel");
const User = require("../models/usermodel");

const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();
const validTo = 3 * 60 * 60 * 24;
const createToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: validTo,
  });
};

const login_user = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.login(email, password);
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": CHAT_ENGINE_PROJECT_ID,
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    const token = createToken(user._id);

    res.json({ user: user._id, token: token });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }

};

const signup_user = async (req, res) => {
  const { password, username, email } = req.body;
  try {
    const user = await User.signup(password, email, username);
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username:user.username, secret:user.password, email:user.email, first_name:user.username},
      { headers: { "Private-Key": process.env.chatPrivate-Key }}
    );
    const token = createToken(user._id);

    res.status(200).json({ user: user._id, token });
  } catch (err) {
    console.log(err.message);

    res.status(400).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  if (req.user) {
    return res.json(user);
  }
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const changeUserDetails = async (req, res) => {
  const { id } = req.params;
  const { email, password, username, currentPassword } = req.body;

  try {
    const user = await User.updateDetails(
      password,
      email,
      username,
      currentPassword,
      id
    );
    res.status(200).json({ success: "user updated successfully", user });
  } catch (err) {
    res.status(500).json(err.message);
    console.log(err);
  }
};

const updatefavoriteAnimes = async (req, res) => {
  try {
    const { id } = req.params;
    const { animeId } = req.body;
    const response = await User.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          favoriteAnimes: animeId,
        },
      }
    );
    console.log(animeId);
    res.status(200).json("added to favorites");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deletefavoriteAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const { animeId } = req.body;
    const response = await User.findOneAndUpdate(
      { _id: id },
      {
        $pull: {
          favoriteAnimes: animeId,
        },
      }
    );

    res.status(200).json("removed from  favorites");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const forgotPassword = async (req, res) => {};

const google_signup_user = async (req, res) => {
  const { name, email, picture } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      const token = createToken(user._id);
      return res.status(200).json({ user: user._id, token });
    }
    const newUser = await User.create({
      username: name,
      email,
      profilepicture: picture,
      isAdmin: false,
    });
    const token = createToken(newUser._id);
    res.status(200).json({ user: newUser._id, token });
  } catch (err) {
    console.log(err.message);

    res.status(400).json({ error: err.message });
  }
};

const deleteProfile = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json("user deleted");
  } catch (error) {
    res.status(500).json("failed to delete profile");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("failed to get users");
  }
};

module.exports = {
  login_user,
  signup_user,
  getUser,
  changeUserDetails,
  updatefavoriteAnimes,
  deletefavoriteAnime,
  forgotPassword,
  deleteProfile,
  google_signup_user,
  getAllUsers,
};

