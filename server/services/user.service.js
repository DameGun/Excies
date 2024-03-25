import User from '../models/user.model.js';
import NotFoundError from '../utilities/errors/notFoundError.js';
import bcrypt from 'bcrypt';

async function findAll() {
    return await User.findAll();
}

async function findOne(username, withInclude) {
    const entity = await User.findOne({ 
        where: { 
            username: username
        }, 
        include: withInclude
    });

    if(entity === null) {
        throw new NotFoundError('user', username);
    }

    return entity;
}

async function create(data) {
    const entity = await User.create({
        ...data, 
        password: await bcrypt.hash(data.password, 10)
    })
    return entity;
}

export default {
    findAll,
    findOne,
    create
}