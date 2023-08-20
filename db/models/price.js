'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Item }) {
      Price.belongsTo(Item, { foreignKey: 'item_id', onDelete: 'CASCADE' });
    }
  }
  Price.init(
    {
      item_id: DataTypes.INTEGER,
      kg025: DataTypes.FLOAT,
      kg05: DataTypes.FLOAT,
      kg1: DataTypes.FLOAT,
      kg3: DataTypes.FLOAT,
      kg5: DataTypes.FLOAT,
      kg10: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Price',
    }
  );
  return Price;
};
