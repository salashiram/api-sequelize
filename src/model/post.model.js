const { Sequelize, Model, DataTypes, BLOB } = require("sequelize");
const sequelize = require("../connection");

class Post extends Model {}

Post.init(
  {
    idPost: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    post: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postImage: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
    tableName: "Post",
  }
);
