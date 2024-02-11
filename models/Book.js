// models/Book.js
const sequelize = require("../config/config");
const { DataTypes } = require("sequelize");
const Author = require("./Author");

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // other book attributes...
});
// Book.belongsTo(Author, { foreignKey: "authorId" });

// No need to specify the association here for a one-to-many relationship.

module.exports = Book;
