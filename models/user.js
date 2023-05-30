const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        fullname: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER,
            min: 18
        },
        height: {
            type: DataTypes.INTEGER
        },
        occupation: {
            type: DataTypes.STRING
        }
    },
        {
            sequelize,
            timestamps: true,
            underscored: true,
            modelName: 'user' //Pluralize to landscapes
        }
)

module.exports = User;