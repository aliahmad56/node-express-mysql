// models/Video.js
const { DataTypes } = require('sequelize');
const sequelize = require("../../config/config");

const Video = sequelize.define('Video', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Video;
