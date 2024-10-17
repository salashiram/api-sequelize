const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("Petstagram", "root", "YHsy8B2QJQTrYg3A", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("All good!!");
  } catch (err) {
    console.log("All bad!!", err);
  }
}

testConnection();

class User extends Model {}

User.init(
  {
    idUser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userImage: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "User",
  }
);

module.exports = User;
