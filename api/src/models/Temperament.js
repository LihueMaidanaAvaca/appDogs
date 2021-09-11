const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('temperament', {
        name: {type: DataTypes.JSON, allowNull: false},
    });
};
