import { DataTypes } from 'sequelize';
import { db } from '../config/connectDb.js';
import Role from './role.model.js';

const User = db.define('user', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
    },
    role_id: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        allowNull: false
    }
}, {
    tableName: 'user',
    timestamps: false
});

User.belongsTo(Role, {
    foreignKey: 'role_id'
});

Role.hasMany(User, {
    foreignKey: 'role_id'
});

export default User;