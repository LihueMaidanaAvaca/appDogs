const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('dog', {
    id : {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
      defaultValue: true
    },
  });
};



