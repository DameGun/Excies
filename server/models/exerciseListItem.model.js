import { DataTypes } from "sequelize";
import { db } from '../config/connectDb.js';
import ExerciseList from './exerciseList.model.js';
import Exercise from './exercise.model.js';

const ExerciseListItem = db.define('exercise_list_item', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    list_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    exercise_id: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    tableName: 'exercise_list_item',
    timestamps: false
});

ExerciseListItem.belongsTo(ExerciseList, {
    foreignKey: 'list_id'
});

ExerciseList.hasMany(ExerciseListItem, {
    foreignKey: 'list_id'
});

ExerciseListItem.belongsTo(Exercise, {
    foreignKey: 'exercise_id'
});

Exercise.hasMany(ExerciseListItem, {
    foreignKey: 'exercise_id'
});

export default ExerciseListItem;