const Comment = require('../models/PolyOnetoMany/Comment');
const Video = require('../models//PolyOnetoMany/Video');
const Image = require('../models/PolyOnetoMany/Image');

const createComment = async (req, res) => {
    const { title, commentableType, commentableId } = req.body;
  
    try {
      const comment = await Comment.create({ title, commentableType, commentableId });
  
      res.status(201).json(comment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  const getCommentsForCommentable = async (req, res) => {
    const { commentableType, commentableId } = req.params;
  
    try {
      let comments;
  
      if (commentableType === 'Video') {
        comments = await Comment.findAll({
          where: { commentableType, commentableId },
          include: [{ model: Video, as: 'VideoCommentSection' }],
        });
      } else if (commentableType === 'Image') {
        comments = await Comment.findAll({
          where: { commentableType, commentableId },
          include: [{ model: Image, as: 'ImageCommentSection' }],
        });
      } else {
        return res.status(400).json({ message: 'Invalid commentableType' });
      }
  
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    createComment,
    getCommentsForCommentable,
  };