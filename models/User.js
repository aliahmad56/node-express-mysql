const sequelize = require("../config/config");
const { DataTypes } = require("sequelize");

const Profile = require("./Profile");
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Profile.belongsTo(User);
User.hasOne(Profile);

module.exports = User;
