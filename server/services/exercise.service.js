import Exercise from '../models/exercise.model.js';
import NotFoundError from '../utilities/errors/notFoundError.js';

async function findAll() {
    return await Exercise.findAll();
}

async function findByPk(id) {
    const response = await Exercise.findByPk(id);

    if(response === null) {
        throw new NotFoundError('exercise', id);
    }

    return response;
}

async function create(data) {
    return await Exercise.create(data);
}

async function update(id, data) {
    const entity = await Exercise.findByPk(id);

    if(entity === null) {
        throw new NotFoundError('exercise', id);
    }

    await entity.set(data);
    return await entity.save();
}

async function destroy(id) {
    const entity = await Exercise.findByPk(id);

    if(entity === null) {
        throw new NotFoundError('exercise', id);
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