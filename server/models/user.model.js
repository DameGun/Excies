import { DataTypes, Deferrable } from 'sequelize';
import { db } from '../config/db.js';
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
        allowNull: true
    },
    role_id: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        references: {
            model: Role,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
}, {
    tableName: 'user',
    timestamps: false
})

User.belongsTo(Role, {
    foreignKey: 'role_id'
});

export default User;