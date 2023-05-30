const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Landscape extends Model { }

Landscape.init(
    {
        landscape_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        weeded: {
            type: DataTypes.BOOLEAN,
        },
        dogPeed: {
            type: DataTypes.BOOLEAN
        },
        isGrassAlive: { //is_grass_alive
            type: DataTypes.BOOLEAN
        },
        squareFootage: {
            type: DataTypes.DOUBLE
        },
        user_id: {
            type: DataTypes.INTEGER, //data type
            references: { //specifically responsible for creating the association
                model: 'users', //table I want to associate to
                key: 'id' //primary key column I want referenced
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'landscape' //Pluralize to landscapes
    }
)

module.exports = Landscape;