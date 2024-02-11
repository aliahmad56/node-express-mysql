// controllers/student.controller.js
const Student = require("../models/ManytoMany/Student");
const Course = require("../models/ManytoMany/Course");
const studentCourse = require("../models/ManytoMany/studentCourse");
// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
  const studentId = req.params.studentId;

  try {
    const student = await Student.findByPk(studentId, {
      include: Course,
    });

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
  const courseId = req.params.courseId;

  try {
    const course = await Course.findByPk(courseId, {
      include: Student,
    });

    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
