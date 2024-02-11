// controllers/author.controller.js
const Author = require("../models/Author");
const Book = require("../models/Book");

const getAuthorWithBooks = async (req, res) => {
  const authorId = req.params.authorId;

  try {
    const author = await Author.findByPk(authorId, {
      include: Book,
    });

    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getBookWithAuthor = async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const book = await Book.findByPk(bookId, {
      include: Author,
    });

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAuthorWithBooks,
  getBookWithAuthor,
};
