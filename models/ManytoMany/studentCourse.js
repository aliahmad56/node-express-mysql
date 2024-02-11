// models/studentCourse.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');

const StudentCourse = sequelize.define('StudentCourse', {
  // You can add additional attributes specific to the relationship if needed
});

module.exports = StudentCourse;
