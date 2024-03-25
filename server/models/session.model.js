import { DataTypes } from "sequelize";
import { db } from '../config/connectDb.js';
import User from "./user.model.js";
import ActivityType from "./activityType.model.js";

const Session = db.define('session', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    activity_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    calories: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'session',
    timestamps: false
});

Session.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Session, {
    foreignKey: 'user_id'
});

Session.belongsTo(ActivityType, {
    foreignKey: 'activity_id'
});

ActivityType.hasMany(Session, {
    foreignKey: 'activity_id'
});

export default Session;