// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require("../../config/config");

const Image = sequelize.define('Image', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Other user attributes...
});

module.exports = Image;
