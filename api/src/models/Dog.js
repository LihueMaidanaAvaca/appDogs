const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('dog', {
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
    weightmin: {
      type: DataTypes.JSON, 
      allowNull: false
    },
    weightmax: {
      type: DataTypes.JSON, 
      allowNull: false
    },
    height: {
      type: DataTypes.JSON, 
      allowNull: false
    },
    life_span: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.JSON
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  });
};



