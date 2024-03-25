import { DataTypes } from "sequelize";
import { db } from '../config/connectDb.js';

const ActivityType = db.define('activity_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'activity_type',
    timestamps: false
});

export default ActivityType;