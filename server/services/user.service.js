import User from '../models/user.model.js';
import NotFoundError from '../utilities/errors/notFoundError.js';
import bcrypt from 'bcrypt';

async function findAll() {
    return await User.findAll();
}

async function findOne(username) {
    const response = await User.findOne({ where: {
        username: username
    }});

    if(response === null) {
        throw new NotFoundError('user', username);
    }

    return response;
}

async function create(data) {
    const response = await User.create({
        ...data, 
        password: await bcrypt.hash(data.password, 10)
    })
    return await response;
}

export default {
    findAll,
    findOne,
    create
}