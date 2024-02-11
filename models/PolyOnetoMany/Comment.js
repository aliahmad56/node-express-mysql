// models/Comment.js
const { DataTypes } = require('sequelize');
const sequelize = require("../../config/config");
const Video = require("./Video");
const Image = require("./Image");
const Comment = sequelize.define('Comment', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  commentableId: {
    type: DataTypes.INTEGER,
    allowNull: false,   
  },
  commentableType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Comment.belongsTo(Video, { foreignKey: 'commentableId', constraints: false, as: 'VideoCommentSection' });
Comment.belongsTo(Image, { foreignKey: 'commentableId', constraints: false, as: 'ImageCommentSection' });

Video.hasMany(Comment, { foreignKey: 'commentableId', constraints: false, scope: { commentableType: 'Video' }, as: 'videoDetails' });
Image.hasMany(Comment, { foreignKey: 'commentableId', constraints: false, scope: { commentableType: 'Image' }, as: 'imageDetails' });
module.exports = Comment;
