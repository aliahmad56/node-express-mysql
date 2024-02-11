// models/Profile.js
const sequelize = require("../config/config");

const { DataTypes } = require("sequelize");
const User = require("./User");

const Profile = sequelize.define("Profile", {
  // Define your model attributes here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// Profile.belongsTo(User);
module.exports = Profile;
