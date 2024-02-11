// In models/student.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/config');
const StudentCourse = require('./studentCourse');
const Course = require('./Course');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other student attributes as needed
});

Course.belongsToMany(Student, { through: StudentCourse });
Student.belongsToMany(Course, { through: StudentCourse });

module.exports = Student;
