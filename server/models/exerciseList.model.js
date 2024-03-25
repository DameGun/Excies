import { DataTypes, Deferrable } from 'sequelize';
import { db } from '../config/connectDb.js';
import User from './user.model.js';

const ExerciseList = db.define('exercise_list', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        defaultValue: 'New List',
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'exercise_list',
    timestamps: false
});

ExerciseList.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(ExerciseList, {
    foreignKey: 'user_id'
});

export default ExerciseList;