//imports
const User = require("./user");
const BlotPost = require("./blogPost");
const Comment = require("./comment");
const BlogPost = require("./blogPost");

//relationship between tables and allows the to join
User.hasMany(BlogPost, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

BlotPost.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Comment.belongsTo(User, {
    foreignKey: "blogPost_id",
    onDelete: "CASCADE",
});

BlogPost.hasMany(Comment, {
    foreignKey: "blogPost_id",
    onDelete: "CASCADE",
});

module.exports = { User, BlogPost, Comment };