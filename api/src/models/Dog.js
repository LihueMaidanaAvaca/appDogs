const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Dog', {
    id : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightmin: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    heightmax: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    weightmin: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    weightmax: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    life_span: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  });
};



