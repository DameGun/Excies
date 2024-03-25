import ExerciseList from "../models/exerciseList.model.js";
import NotFoundError from "../utilities/errors/notFoundError.js";
import userService from './user.service.js';

async function findAll(username) {
    const user = await userService.findOne(username, ExerciseList);
    return user.exercise_lists;
}

async function findByPk(id) {
    const entity = await ExerciseList.findByPk(id);

    if(entity === null) {
        throw new NotFoundError('exerciseList', id);
    }

    return entity;
}

async function create(username, data) {
    const user = await userService.findOne(username);
    data.user_id = user.id;
    return await ExerciseList.create(data);
}

async function update(id, data) {
    const entity = await ExerciseList.findByPk(id);

    if(entity === null) {
        throw new NotFoundError('exerciseList', id);
    }

    await entity.set(data);
    return await entity.save();
}

async function destroy(id) {
    const entity = await ExerciseList.findByPk(id);

    if(entity === null) {
        throw new NotFoundError('exerciseList', id);
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