import { DataTypes } from 'sequelize';
import { db } from '../config/connectDb.js';
import Muscles from './muscles.model.js';

const Exercise = db.define('exercise', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    muscles_id: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},
{
    tableName: 'exercise',
    timestamps: false
});

Exercise.belongsTo(Muscles, {
    foreignKey: 'muscles_id'
});

Muscles.hasMany(Exercise, {
    foreignKey: 'muscles_id'
});

export default Exercise;