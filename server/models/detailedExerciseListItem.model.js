import { DataTypes } from "sequelize";
import { db } from '../config/connectDb.js';
import ExerciseListItem from "./exerciseListItem.model.js";
import Session from './session.model.js';

const DetailedExerciseListItem = db.define('detailed_exercise_list_item', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    list_item_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    session_id: {
        type: DataTypes.UUID,
        allowNull: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    rep: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'detailed_exercise_list_item',
    timestamps: false
});

DetailedExerciseListItem.belongsTo(ExerciseListItem, {
    foreignKey: 'list_item_id'
});

ExerciseListItem.hasMany(DetailedExerciseListItem, {
    foreignKey: 'list_item_id'
});

DetailedExerciseListItem.belongsTo(Session, {
    foreignKey: 'session_id'
});

Session.hasMany(DetailedExerciseListItem, {
    foreignKey: 'session_id'
});

export default DetailedExerciseListItem;