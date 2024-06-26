import { DataTypes } from 'sequelize';
import { db } from '../config/connectDb.js';

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
    tableName: 'roles',
    timestamps: false
})

export default Role;