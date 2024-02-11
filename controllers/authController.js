const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Profile = require("../models/Profile");

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

      const creatUser = new User({ username, password: hashedPassword });
      const saveUser= await creatUser.save();
      
      // Awa mola hamo d use kore create koriko bom
    // const user = await User.create({ username, password: hashedPassword });

    res.status(201).json({ user: saveUser.toJSON() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    console.log("User name is = ", user);

    if (!user) {
      return res.status(401).json({ error: "username is invalid" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: "password is wrong" });
    }
    console.log("Before Token ");
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("After Token");

    res.json({ token });
    // res.json("Successfully Login");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Relationships

// One to one
const getProfileByUser = async (req, res) => {
  const profileId = req.params.profileId;
   console.log(profileId);
  try {
    const userProfile = await Profile.findByPk(profileId, {
      include: User,
    });

    if (userProfile) {
      res.json(userProfile);
      // res.json({
      // data: userPr
      // })
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// One to one Inverse
const getUserByProfile = async (req, res) => {
  const userId = req.params.userId;

  try {
    const userProfile = await User.findByPk(userId, {
      include: Profile,
      attributes: {
        exclude: ['password'], // Exclude the 'password' field
      },
    });

    if (userProfile) {
      res.json(userProfile);
      // res.json({
      // data: userPr
      // })
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  signup,
  login,
  getProfileByUser,
  getUserByProfile,
};
