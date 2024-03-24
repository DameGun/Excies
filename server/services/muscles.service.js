import Muscles from "../models/muscles.model.js";
import NotFoundError from "../utilities/errors/notFoundError.js";

async function findAll() {
    return await Muscles.findAll();
}

async function findByPk(id) {
    const response = await Muscles.findByPk(id);

    if(response === null) {
        throw new NotFoundError('muscles', id);
    }

    return response;
}

async function create(data) {
    return await Muscles.create(data);
}

async function update(id, data) {
    const entity = await Muscles.findByPk(id);

    if(entity === null) {
        throw new NotFoundError('muscles', id);
    }

    await entity.set(data);
    return await entity.save();
}

async function destroy(id) {
    const entity = await Muscles.findByPk(id);

    if(entity === null) {
        throw new NotFoundError('muscles', id);
    }

    return entity.destroy();
}

export default {
    findAll,
    findByPk,
    create,
    update,
    destroy
}