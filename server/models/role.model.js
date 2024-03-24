import { DataTypes } from 'sequelize';
import { db } from '../config/db.js';

const Role = db.define('role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'user',
    timestamps: false
})

export default Role;