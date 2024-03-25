import Session from '../models/session.model.js';
import NotFoundError from '../utilities/errors/notFoundError.js';
import userService from './user.service.js';

async function findAll(username) {
    const user = await userService.findOne(username, Session);
    return user.sessions;
}

async function findByPk(id) {
    const entity = await Session.findByPk(id);

    if(entity === null) {
        throw new NotFoundError('session', id);
    }

    return entity;
}

async function create(username, data) {
    const user = await userService.findOne(username);
    data.user_id = user.id;
    return await Session.create(data);
}

async function update(id, data) {
    const entity = await Session.findByPk(id);

    if(entity === null) {
        throw new NotFoundError('session', id);
    }

    await entity.set(data);
    return await entity.save();
}

async function destroy(id) {
    const entity = await Session.findByPk(id);

    if(entity === null) {
        throw new NotFoundError('session', id);
    }

    return await entity.destroy();
}

export default {
    findAll,
    findByPk,
    create,
    update,
    destroy
}