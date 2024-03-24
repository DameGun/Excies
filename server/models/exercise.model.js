import { DataTypes, Deferrable } from 'sequelize';
import { db } from '../config/db.js';
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
        references: {
            model: Muscles,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
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

export default Exercise;