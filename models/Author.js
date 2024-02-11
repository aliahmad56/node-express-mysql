// models/Author.js
const sequelize = require("../config/config");
const { DataTypes } = require("sequelize");
const Book = require("./Book");

const Author = sequelize.define("Author", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Establish a one-to-many association
Author.hasMany(Book, { foreignKey: "authorId" });
// The foreignKey option specifies the field in the Book model that will be used as the foreign key.

module.exports = Author;
