const usermodel = require("../models/usermodel");
const User = require("../models/usermodel");
const nodeMailer = require("nodemailer");
const jsonwebtoken = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();
const validTo = 3 * 60 * 60 * 24;
const createToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: validTo,
  });
};
const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "ahub7282@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
});

const createOrGetChatEngineUser = async (user) => {
  const r = await axios.put(
    "https://api.chatengine.io/users/",
    {
      username: user.username,
      secret: "secret",
      email: user.email,
      first_name: user.username,
    },
    { headers: { "Private-Key": process.env.CHATPRIVATEKEY } }
  );
  return r.data;
};

const login_user = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.login(email, password);
    const chatUser = await createOrGetChatEngineUser(user);
    const token = createToken(user._id);

    res.json({ user: user._id, token: token, chatUser });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

const signup_user = async (req, res) => {
  const { password, username, email } = req.body;
  try {
    const user = await User.signup(password, email, username);
    const chatUser = await createOrGetChatEngineUser(user);
    const token = createToken(user._id);

    res.status(200).json({ user: user._id, token, chatUser });
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
s
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

const google_signup_user = async (req, res) => {
  const { name, email, picture } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      const chatUser = await createOrGetChatEngineUser(user);
      const token = createToken(user._id);
      return res.status(200).json({ user: user._id, token, chatUser });
    }
    const newUser = await User.create({
      username: name,
      email,
      profilepicture: picture,
      isAdmin: false,
    });

    const chatUser = await createOrGetChatEngineUser(newUser);

    const token = createToken(newUser._id);
    res.status(200).json({ user: newUser._id, token, chatUser });
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

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await usermodel.findOne({ email });

    if (!user) {
      res.json("no such user with this email");
      return;
    }

    const secret = process.env.SECRET_KEY + user._id;

    const payload = {
      email,
      password: user.password,
    };

    const token = jsonwebtoken.sign(payload, secret, { expiresIn: "10m" });

    const link = `http://localhost:5173/forgot/password/${token}/${user._id}`;
    console.log(email);
    const emailOptions = {
      from: "ahub7282@gmail.com",
      to: email,
      subject: "reset your password",
      html: `<p>hello ${user.username} here is your link to reset your password <a>${link}</a></p>`,
    };
    transporter.sendMail(emailOptions, function (error, info) {
      if (error) {
        res.json(error);
      } else {
        res.json("Email sent to your email  ");
      }
    });
  } catch (error) {
    res.json(error);
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
