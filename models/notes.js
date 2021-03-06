"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notes.init(
    {
      userId: DataTypes.STRING,
      itsPriority: DataTypes.BOOLEAN,
      isCompleted: DataTypes.BOOLEAN,
      Date: DataTypes.STRING,
      Todo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Notes",
    }
  );
  return Notes;
};
