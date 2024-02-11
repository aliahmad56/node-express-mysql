const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/config");
const authController = require("./controllers/authController");
const AuthorBookController = require("./controllers/AuthorBookController");
const studentController = require("./controllers/StudentController");
const commentController = require("./controllers/commentController");

const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./swagger");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use(bodyParser.json());

// Users Routes
const authRoutes = require("./src/routes/authRoutes");
const customerRoutes = require("./src/routes/customerRoutes");

// Use route files
app.use(authRoutes);
app.use(customerRoutes);

// Sequlize Relationships
// One to one
app.get("/profile/:profileId/user", authController.getProfileByUser);
// Inverse
app.get("/user/:userId", authController.getUserByProfile);

// OnetoMany
app.get("/authors/:authorId", AuthorBookController.getAuthorWithBooks);
// OnetoMany Inverse
app.get("/books/:bookId", AuthorBookController.getBookWithAuthor);

// Many to Many
// Get all students
app.get("/students", studentController.getAllStudents);

// Get student by ID with associated courses
app.get("/students/:studentId", studentController.getStudentById);

// Inverse
// Get all All courses
app.get("/students", studentController.getAllCourses);

// Get course by ID with associated student
app.get("/courses/:courseId", studentController.getCourseById);

// Polymorphic relation
// One to Many
app.post('/comments', commentController.createComment);
app.get('/comments/:commentableType/:commentableId', commentController.getCommentsForCommentable);

app.get("/", (req, res) => {
  res.send("Ok");
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Unable to connect to the database:", error));
