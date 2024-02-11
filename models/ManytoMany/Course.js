// In models/course.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');
const StudentCourse = require('./studentCourse');
const Student = require('./Student');

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other course attributes as needed
});

// Course.belongsToMany(Student, { through: StudentCourse });
// Student.belongsToMany(Course, { through: StudentCourse });

module.exports = Course;
